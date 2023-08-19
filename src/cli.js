import fs from 'fs';
import getFile from "./index.js";
import chalk from "chalk";

const path = process.argv[2];

async function getResult(path){
  try{
    fs.lstatSync(path);
  } catch(error){
    if(error.code === 'ENOENT'){
      console.log("Path doesnt exist");
      return
    }
  }

  if(fs.lstatSync(path).isFile()){
    const result = await getFile(path);
    console.log(chalk.green(path));
    console.log(result);
  } else if(fs.lstatSync(path).isDirectory()){
    const files = await fs.promises.readdir(path);
    files.forEach(file => getResult(path.concat('/', file)))
  }
  
}

getResult(path);





