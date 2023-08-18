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
    console.log(chalk.green(text));
  } catch(error){
    handleError(error)
  }
}


getFile('./archives/text.md');