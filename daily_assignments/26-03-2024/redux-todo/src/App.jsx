import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePage from "./Pages/CreatePage";
import DisplayPage from "./Pages/DisplayPage";
import UpdatePage from "./Pages/UpdatePage";
import Navbar from "./components/Navbar";

const route = [
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Outlet />
      </div>
    ),
    errorElement: <h1> 404 Page not found</h1>,

    children: [
      {
        index: true,
        element: <DisplayPage />,
      },
      {
        path: "/add",
        element: <CreatePage />,
      },
      {
        path: "/update",
        element: <UpdatePage />,
      },
      {
        path: "*",
        element: <h2>404 PAGE NOT FOUND</h2>,
      },
    ],
  },
];
const router = createBrowserRouter(route);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
