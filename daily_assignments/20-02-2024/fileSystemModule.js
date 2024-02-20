import fs from "fs";

export function listFiles(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.log("Can't find directory");
      return;
    } else {
      console.log("Files in the given directory:");
      files.forEach((file) => {
        console.log(file.toString());
      });
    }
  });
}

export function createDirectory(dir) {
  fs.mkdir(dir, { recursive: true }, (err) => {
    if (err) {
      console.log(`${dir} directory can't be added.`);
    } else {
      console.log(`Successfully added ${dir} to current directory .`);
    }
  });
}

export function readFromFile(fileName) {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      console.log(`Can't read from the ${fileName}.`);
    } else {
      console.log(`File Data: ${data}`);
    }
  });
}

export function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(`Error occured-${err}.Con't write in ${fileName}.`);
    } else {
      console.log(` ${fileName} has been updated.`);
    }
  });
}
