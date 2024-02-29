const express = require("express");
const todosController = require("../controller/controller.todos.js");

const router = express.Router();

//get all tasks
router.get("/", todosController.getAllTodos);

//get by id
router.get("/:id", todosController.getTodo);

//post
router.post("/", todosController.addTodo);

//update status
router.patch("/:id", todosController.updateTodo);

//delete
router.delete("/:id", todosController.deleteTodo);

module.exports = router;
