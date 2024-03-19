import React from "react";
import {
  NavLink,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/HomePage";
import Users from "./pages/UsersPage";
import Posts from "./pages/PostsPage";
import Todos from "./pages/TodosPage";
import Footer from "./Footer";

const route = [
  {
    path: "/",
    element: (
      <div>
        <nav>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return isActive ? { color: "cyan" } : {};
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/users"
            style={({ isActive }) => {
              return isActive ? { color: "plum" } : {};
            }}
          >
            Users
          </NavLink>
          <NavLink
            to="/posts"
            style={({ isActive }) => {
              return isActive ? { color: "plum" } : {};
            }}
          >
            Posts
          </NavLink>
          <NavLink
            to="/todos"
            style={({ isActive }) => {
              return isActive ? { color: "plum" } : {};
            }}
          >
            Todos
          </NavLink>
        </nav>
        <Outlet />
        <Footer />
      </div>
    ),
    errorElement: <h1>Page not found</h1>,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/todos",
        element: <Todos />,
      },
    ],
  },
];
const router = createBrowserRouter(route);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
