const express = require("express");
const libraryRouter = require("./routes/routes.library.js");
const loginRouter = require("./routes/routes.user.js");
const path = require("path");

const server = express();
const port = 8000;

server.use(express.json()); //middlewares
server.use(express.static(path.join(__dirname, "library_page")));
// server.use(express.static(path.join(__dirname, "login_page")));

//routers
server.use("/library", libraryRouter);
server.use("/libraryuser", loginRouter);

server.listen(port, (err) => {
  if (!err) {
    console.log(`server listening at ${port}`);
  }
});
