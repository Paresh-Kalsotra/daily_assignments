import { writeToFile, readFromFile, logFile } from "./fileSystem.js";
import express from "express";

const router = express.Router();

//get request
router.get("/users", (req, res) => {
  const data = readFromFile();
  if (!data) {
    res.status(500); //server error
    logFile("Get request - unsuccessful");
  } else {
    res.status(200).json(data);
    logFile("GET request - successful ");
  }
});

// get request - id
router.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = readFromFile(); //reading user data
  const user_data = data.filter((item) => item.id === id); //filtering user record using id

  if (user_data.length === 0) {
    res.status(404).json("User not found"); //setting not found status
    logFile(` GET request - user ID: ${id} not found`);
  } else {
    res.status(200).json(user_data); //status success
    logFile(`GET request - user ID: ${id}, successful`);
  }
});

//post request
router.post("/users", (req, res) => {
  if ("id" in req.body) {
    const data = readFromFile(); //reading file
    data.push(req.body); //pushing new data
    if (writeToFile(data)) {
      res.status(201).json(`User added successfully:`);
      logFile("POST request - Successful");
    } else {
      res.status(500).json("Failed to add user");
      logFile("POST request - Unsucessful");
    }
  } else {
    res.status(422).json("Required Field 'id' not present");
    logFile("POST request - id not present in request");
  }
});

//put request
router.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if ("id" in req.body) {
    const data = readFromFile(); //reading file
    const updated_data = data.filter((item) => item.id !== id); //filtering user data using id
    if (updated_data.length === 0) {
      //runs when user id is not present in data.json
      res.status(404).json(`User record with id: ${id} not found`);
      logFile("Put request- user not found");
    } else {
      updated_data.push(req.body); //pushing new data
      if (writeToFile(updated_data)) {
        res.status(201).json(`User record with id: ${id} updated successfully`);
        logFile("PUT request - Successful");
      } else {
        res.status(500).json("Failed to update record");
        logFile("PUT request - Unsucessful");
      }
    }
  } else {
    res.status(422).json("Required Field 'id' not present");
    logFile("PUT request - id not present in request");
  }
});

//delete request
router.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = readFromFile(); //reading file
  const updated_data = data.filter((item) => item.id !== id); //filtering user data using id

  if (writeToFile(updated_data)) {
    res.status(201).json("User record deleted");
    logFile("DELETE request - Successful");
  } else {
    res.status(500).json("Failed to delete record");
    logFile("DELETE request - Unsucessful");
  }
});

export default router;
