import express from "express";
import router from "./modules/router.js";
import { logFile } from "./modules/fileSystem.js";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const server = express();
server.use(express.json()); //middleware to parse requests

server.use(router);

// server.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "/index.html"));
// });

const port = 8080;

//running server
server.listen(port, (error) => {
  if (!error) {
    logFile(`Server listening at port: ${port}`); //log to txt file and to console
  } else {
    logFile(`Server can't start: ${error}`);
  }
});
