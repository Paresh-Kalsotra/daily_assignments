import express from "express";
import router from "./modules/router.js";
import { logFile } from "./modules/fileSystem.js";

const server = express();
server.use(express.json()); //middleware to parse requests

server.use(router);

const port = 8080;

//running server
server.listen(port, (error) => {
  if (!error) {
    logFile(`Server listening at port: ${port}`); //log to txt file and to console
  } else {
    logFile(`Server can't start: ${error}`);
  }
});
