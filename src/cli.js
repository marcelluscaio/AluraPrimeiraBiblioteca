import getFile from "./index.js";

const path = process.argv[2];

async function showResult(path){
  const result = await getFile(path);
  console.log(result);
}

showResult(path);





