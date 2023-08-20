async function getLinks(arrayObjects){
  return arrayObjects.map(object => Object.values(object).join());
}

async function checkStatus(link){
  try{
    const response = await fetch(link);
    const status = response.status;
    return status;

  } catch(error){
    return "Ocorreu algum erro"
  }
}

export default async function validateLinks(linksList){
  const arrayOfLinks = await getLinks(linksList);
  const validatedLinks = await Promise.all(
    arrayOfLinks.map(async link => await checkStatus(link))
  );

  const result = linksList.map((object, index) => 
    (
      {
        ...object,
        status: validatedLinks[index]
      }
    )
  );

  return result;
};