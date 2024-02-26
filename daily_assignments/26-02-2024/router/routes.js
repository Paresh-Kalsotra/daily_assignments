const express = require("express");
const controller = require("../controller/controller.js");

const router = express.Router();

//get all tasks
router.get("/", controller.getAll);

//get by id
router.get("/:id", controller.getById);

//post
router.post("/", controller.postTask);

//update on id
router.put("/:id", controller.putUpdate);

//update status
router.patch("/:id", controller.patchUpdate);

//delete
router.delete("/:id", controller.deleteTask);

module.exports = router;
