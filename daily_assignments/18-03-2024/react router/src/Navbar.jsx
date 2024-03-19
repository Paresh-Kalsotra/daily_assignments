import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/todos">Todos</NavLink>
    </nav>
  );
}
export default Navbar;
