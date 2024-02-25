import fs from "fs";
const logFilePath = "./files/log.txt";
const dataFilePath = "./files/data.json";

export function logFile(text) {
  const timestamp = new Date().toLocaleString(); //timestamp
  const log = `${timestamp} - ${text}\n `;
  console.log(log); // Log to console as well
  fs.appendFile(logFilePath, log, (err) => {
    if (err) {
      console.log("Error occured while logging" + err);
    }
  });
}

//Func to read data from file
export function readFromFile() {
  try {
    const data = fs.readFileSync(dataFilePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    logFile("Error reading file:", err.message);
    return [];
  }
}

//func to write data to file
export function writeToFile(data) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data), "utf-8");
    return true;
  } catch (err) {
    logFile("Error writing file:", err.message);
    return false;
  }
}
