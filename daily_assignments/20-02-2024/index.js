import { log } from "console";
import {
  listFiles,
  createDirectory,
  readFromFile,
  writeToFile,
} from "./fileSystemModule.js"; //importing functions

import readline from "readline"; //importing readline module

//creating interface
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  "Enter 1 to list files,2 to create directory, 3 to read file content, 4 to write to file"
);

read.question("Enter : ", (input) => {
  switch (input) {
    case "1":
      read.question("Enter directory's path to list files: ", (path) => {
        listFiles(path);
        read.close();
      });
      break;

    case "2":
      read.question("Enter name of new directory: ", (fName) => {
        createDirectory(fName);
        read.close();
      });
      break;

    case "3":
      read.question("Enter file's name to read content: ", (fName) => {
        readFromFile(fName);
        read.close();
      });
      break;

    case "4":
      read.question("Enter file nam3: ", (fName) => {
        read.question("Enter content to write to file", (cont) => {
          writeToFile(fName, cont);
          read.close();
        });
      });
      break;

    default:
      read.close();
  }
});
