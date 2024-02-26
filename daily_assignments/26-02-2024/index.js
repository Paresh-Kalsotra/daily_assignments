const express = require("express");
const router = require("./router/routes.js");

const server = express();

server.use(express.json()); //middlewares
server.use("/tasks", router); //router middleware

const port = process.env.port || 8080;

server.listen(port, (err) => {
  if (!err) {
    console.log(`Server listening at ${port}`);
  }
});
