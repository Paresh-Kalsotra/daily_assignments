const { ObjectId } = require("mongodb");
const mongoConnect = require("../db.js");

async function getAllTodos(req, res) {
  try {
    const db = await mongoConnect();
    const todosCltn = db.collection("todos");
    const todos = await todosCltn.find().sort({ id: 1 }).toArray(); //.find return cursor, we need to await it to convert it to array

    if (todos.length === 0) {
      return res.status(404).json("No todo found");
    }
    return res.status(200).json(todos);
  } catch (err) {
    console.log(err);
    res.status(500).json("Error fetching todos");
  }
}

async function getTodo(req, res) {
  const todoId = req.params.id;

  try {
    const db = await mongoConnect();
    const todosCltn = db.collection("todos");
    const todos = await todosCltn.find({ _id: new ObjectId(todoId) }).toArray();

    if (todos.length === 0) {
      return res.status(404).json("Todo not Found");
    }
    return res.status(200).json(todos);
  } catch (err) {
    console.log(err);
    res.status(500).json("Error fetching todo");
  }
}

async function addTodo(req, res) {
  try {
    const { userId, title, completed } = req.body;

    if (userId && title && typeof completed === "boolean") {
      const db = await mongoConnect();
      const todosCltn = db.collection("todos");
      result = await todosCltn.insertOne({
        userId: userId,
        title: title,
        completed: completed,
      });

      return res
        .status(200)
        .json(`task added successfully,ID: ${result.insertedId}`);
    }

    res.status(422).json("Required field missing");
  } catch (err) {
    console.log(err);
    res.status(500).json("error inserting data");
  }
}

async function updateTodo(req, res) {
  try {
    const { title, completed } = req.body;

    if (title && typeof completed === "boolean") {
      const db = await mongoConnect();
      const todosCltn = db.collection("todos");
      result = await todosCltn.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: { title: title, completed: completed } }
      );

      return res
        .status(200)
        .json(`${result.matchedCount} task(s) updated successfully`);
    }

    res.status(422).json("Required field missing");
  } catch (err) {
    console.log(err);
    res.status(500).json("error updating data");
  }
}

async function deleteTodo(req, res) {
  try {
    const db = await mongoConnect();
    const todosCltn = db.collection("todos");
    result = await todosCltn.deleteMany({ _id: new ObjectId(req.params.id) });

    res.status(200).json(` ${result.deletedCount} task deleted `);
  } catch (err) {
    console.log(err);
    res.status(500).json("error deleting data");
  }
}

module.exports = {
  getAllTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
};
