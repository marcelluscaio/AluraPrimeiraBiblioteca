## My first Library

### Summary
This library gets a path, checks if it is a path to a directory or a file. If it is a file, it returns the links within the file, with an option to check if the links are valid. If it is a directory, the library will repeat the operation until it reaches a file.

### Background
This lib was created in Alura's course "Node.js: Criando sua primeira biblioteca". 

In the course we worked with the possibility of a path being a file or a directory. But if within a directory there were another directory, it wouldn't work. I used recursivity to work around that.


### How to run
Install the package by typing "npm i check-links-caiocabral-alura" on your command line.

After that, copy this script into your package.json:
"scripts": {
    "check": "node node_modules/check-links-caiocabral-alura/src/cli.js",
    "validate": "node node_modules/check-links-caiocabral-alura/src/cli.js --validate"
  }

To get the links from files, type "npm run check <path>" in the command line. To check if they are valid, type "npm run validate <path>"
