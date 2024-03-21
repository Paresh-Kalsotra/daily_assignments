import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const route = [
  {
    path: "/",
    element: (
      <div
        style={{
          maxWidth: "300px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Outlet />
      </div>
    ),
    errorElement: <h1> 404 Page not found</h1>,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <Signup />,
      },
    ],
  },
];

const router = createBrowserRouter(route);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
