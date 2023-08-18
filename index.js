import fs from 'fs';
import chalk from "chalk";

function handleError(error){
  throw new Error(chalk.red((error.code, "Something went wrong")));
}

function getFile(filePath){
  const encoding = "utf-8";
  fs.readFile(filePath, encoding, (error, text) => {
    error && handleError(error);
    console.log(chalk.green(text))
  })

}

getFile('./aarchives/text.md');