import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <h1 style={{ color: "#eeeeee", fontWeight: "bold" }}>Todo-App</h1>
      <div>
        <NavLink to="/">Todo List</NavLink>
        <NavLink to="/add">Create Todo</NavLink>
      </div>
    </nav>
  );
}
export default Navbar;
