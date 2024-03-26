import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { Link } from "react-router-dom";

const CreatePage = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handler = (e) => {
    e.preventDefault();

    if (input) {
      dispatch(addTodo(input));
      setMessage("Todo Added Successfully");
    }
    setInput("");
  };

  return (
    <div className="form-container">
      <h1>Add Todo to your List!</h1>
      <form onSubmit={handler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Todo"
        ></input>
        <button type="submit">Add!</button>
      </form>
      <div id="message">{message}</div>
    </div>
  );
};

export default CreatePage;
