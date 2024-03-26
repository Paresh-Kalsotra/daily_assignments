import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo } from "../features/todo/todoSlice";

const UpdatePage = () => {
  const editId = useSelector((state) => state.edit.editId);
  const todos = useSelector((state) => state.todo.todos);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  //finding todo from todos array
  const todo = todos?.filter((item) => item.id === editId);

  const [input, setInput] = useState(todo[0]?.text);

  const handler = (e) => {
    e.preventDefault();
    if (editId && todo.length) {
      dispatch(updateTodo({ id: editId, text: input }));
      setMessage("Todo updated.");
    } else {
      setMessage("Can't update todo");
    }
  };

  return (
    <div className="form-container">
      <h1>Update Todo!</h1>
      <form onSubmit={handler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Todo"
        ></input>
        <button type="submit">Update!</button>
      </form>
      <div id="message">{message}</div>
    </div>
  );
};

export default UpdatePage;
