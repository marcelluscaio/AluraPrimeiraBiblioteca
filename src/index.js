import fs from 'fs';
import chalk from "chalk";

function handleError(error){
  throw new Error(chalk.red((error.code, "Something went wrong")));
}

//This function was syncronous
/* function getFile(filePath){
  const encoding = "utf-8";
  fs.readFile(filePath, encoding, (error, text) => {
    error && handleError(error);
    console.log(chalk.green(text))
  })
} */

//this is the asynchronous version with then
/* function getFile(filePath){
  const encoding = "utf-8";
  fs.promises.readFile(filePath, encoding)
    .then((text) => {console.log(chalk.green(text))})
    .catch(handleError)
} */

//this is the asynchronous version with async await
async function getFile(filePath){
  const encoding = "utf-8";
  try{
    const text = await fs.promises.readFile(filePath, encoding);
    return getLinks(text);
  } catch(error){
    handleError(error)
  } finally {
    //console.log(chalk.magenta("I guess this is the end..."))
  }
};

function getLinks(text){
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturedLinks = [...text.matchAll(regex)];
  const titlePlusLink = capturedLinks.map(link => ({[link[1]]: link[2]}));
  //link[1] needs square backets becaus of this: https://javascript.info/object#computed-properties
  
  return titlePlusLink.length === 0 ? "No links found" : titlePlusLink;
}

export default getFile;