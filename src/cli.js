#!/usr/bin/env node
import fs from 'fs';
import getFile from "./index.js";
import chalk from "chalk";
import validateLinks from './validate.js';

const path = process.argv[2] === "--validate" ? process.argv[3] : process.argv[2];
const validate = process.argv[2] === "--validate" ? true : false;

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
    if(validate && typeof(result) !== "string"){
      const linksValidated = await validateLinks(result);
      console.log('validate: ', linksValidated);
    } else{
      console.log(chalk.green(path));
      console.log('result: ',result);
    }
  } else if(fs.lstatSync(path).isDirectory()){
    const paths = await fs.promises.readdir(path);
    paths.forEach(fileOrDirPath => getResult(path.concat('/', fileOrDirPath)))
  }
}

getResult(path);





