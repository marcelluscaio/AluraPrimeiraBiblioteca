import fs from 'fs';
import getFile from "./index.js";

const path = process.argv[2];

async function showResult(path){
  if(fs.lstatSync(path).isFile()){
    const result = await getFile(path);
    console.log(result);
  } else if(fs.lstatSync(path).isDirectory()){
    const files = await fs.promises.readdir(path);
    files.forEach(file => showResult(path.concat('/', file)))
  }
  
}

showResult(path);





