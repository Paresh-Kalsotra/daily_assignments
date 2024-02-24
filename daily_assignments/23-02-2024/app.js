const express = require("express");
const fs = require("fs");

const app = express();
const port = 8000;

app.use(express.json()); //middleware to parse requests

//running server
app.listen(port, (error) => {
  if (!error) {
    console.log(`Server listening at port: ${port}`); //log this
  } else {
    console.log(`Server can't start: ${error}`); //log this
  }
});
