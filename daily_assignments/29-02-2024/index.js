const express = require("express");
const todosRouter = require("./router/routes.todos.js");

const server = express();
const port = process.env.port || 8000;

server.use(express.json()); //middlewares
server.use("/api/todos/", todosRouter);

server.listen(port, (err) => {
  if (!err) {
    console.log(`server listening at port ${port}`);
  }
});
