const fs = require("fs");
const filePath = "./data_files/task_tracker.json";
// const express = require("express");

// file handling functions
function read() {
  try {
    let data = [];
    data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data); //parsing to json format
  } catch (err) {
    console.log(err.message); //logging error
    return false;
  }
}
function write(data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data), "utf-8");
    return true;
  } catch (err) {
    console.log(err.message); //logging the error
    return false;
  }
}

// controller actions

function getAll(req, res) {
  const tasks = read();
  if (!tasks) {
    res.status(500).send("error retrieving tasks");
  }
  res.status(200).json(tasks);
}

function getById(req, res) {
  const id = parseInt(req.params.id);
  const tasks = read();
  const specific_task = tasks.filter((item) => item.id === id); // finding specific task

  if (specific_task.length === 0) {
    return res.status(404).send("task not found");
  }
  return res.status(200).json(specific_task);
}

function postTask(req, res) {
  if ("title" in req.body && "description" in req.body) {
    const tasks = read();
    let id = 0;

    //taking id from req.body if present else assigning new id
    if ("id" in req.body) {
      id = req.body.id;
    } else {
      for (item of tasks) {
        //finding max id
        if (item.id >= id) {
          id = item.id;
        }
      }
      id = id + 1;
    }

    tasks.push({
      ...req.body,
      id: id,
      complete: req.body.complete || false,
    });

    if (write(tasks)) {
      return res.status(201).send("task added successfully");
    }
    return res.status(500).send("failed to add task");
  }
  return res.status(422).send("required field not present"); //status-unprocessable data
}

function putUpdate(req, res) {
  const id = parseInt(req.params.id);
  if (
    "title" in req.body &&
    "description" in req.body &&
    "complete" in req.body
  ) {
    const tasks = read();
    const fav_task = tasks.filter((item) => item.id === id); // finding favourable
    const new_list = tasks.filter((item) => item.id !== id); // removing fav_task obj

    if (fav_task.length !== 0) {
      //adding updated obj
      new_list.push({
        id: id,
        title: req.body.title,
        description: req.body.description,
        complete: req.body.complete,
      });
      if (write(new_list)) {
        return res.status(201).send(`task updated successfully`);
      }
      return res.status(500).send("Failed to update task");
    }
    return res.status(404).send("task not found");
  }
  return res.status(422).send("Required Fields not present");
}

function patchUpdate(req, res) {
  const id = parseInt(req.params.id);
  if ("complete" in req.body) {
    const tasks = read();
    const fav_task = tasks.filter((item) => item.id === id); // finding favourable
    const updated_list = tasks.filter((item) => item.id !== id); // removing fav_task obj

    if (fav_task.length !== 0) {
      //appending updated obj
      updated_list.push({
        id: fav_task[0].id,
        title: fav_task[0].title,
        description: fav_task[0].description,
        complete: req.body.complete,
      });

      if (write(updated_list)) {
        return res.status(201).send(`task updated successfully`);
      }
      return res.status(500).send("Failed to update task");
    }
    return res.status(404).send("task not found");
  }
  return res.status(422).send("Required Fields not present");
}

function deleteTask(req, res) {
  const id = parseInt(req.params.id);
  const tasks = read();

  const del_task = tasks.filter((item) => item.id === id);

  //filtering tasks for deletion and checking if empty
  if (del_task.length !== 0) {
    const new_list = tasks.filter((item) => item.id !== id); // removing fav_task obj
    if (write(new_list)) {
      return res.status(201).send(`task deleted successfully`);
    }
    return res.status(500).send("Failed to delete task");
  }
  return res.status(404).send("Task not found");
}

module.exports = {
  getAll,
  getById,
  postTask,
  putUpdate,
  patchUpdate,
  deleteTask,
};
