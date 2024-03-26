import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { setEditId } from "../features/todo/editSlice";

const DisplayPage = () => {
  const todos = useSelector((state) => state.todo.todos);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function deleteHandler(id) {
    dispatch(removeTodo(id));
  }

  function editHandler(id) {
    dispatch(setEditId(id));
    navigate("/update");
  }
  return (
    <div className="todo-container">
      <h1
        style={{
          color: "#eeeeeee",
          background: "#00adb5",
          padding: "20px 0 10px 20px",
          textAlign: "center",
        }}
      >
        To-Do List
      </h1>
      {todos.map((todo) => (
        <div className="card" key={todo.id}>
          {todo.text}

          <div>
            <span className="icon" onClick={() => editHandler(todo.id)}>
              <MdEdit />
            </span>
            <span className="icon" onClick={() => deleteHandler(todo.id)}>
              <MdDelete />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default DisplayPage;
