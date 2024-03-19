import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage";
import Users from "./pages/UsersPage";
import Posts from "./pages/PostsPage";
import Todos from "./pages/TodosPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const route = [
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    ),
    errorElement: <h1> 404 Page not found</h1>,

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
