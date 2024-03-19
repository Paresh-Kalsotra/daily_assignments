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
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/users" activeClassName="active">
            Users
          </NavLink>
          <NavLink to="/posts" activeClassName="active">
            Posts
          </NavLink>
          <NavLink to="/todos" activeClassName="active">
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
