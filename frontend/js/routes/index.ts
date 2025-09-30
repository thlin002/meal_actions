import { createBrowserRouter } from "react-router";

import { usersLoader } from "@/js/loaders";
import Home from "@/js/pages/Home";
import Users from "@/js/pages/Users";
import Login from "@/js/pages/Login";

const router = createBrowserRouter([
  { index: true, Component: Home },
  { path: "users", Component: Users, loader: usersLoader },
  { path: "login", Component: Login },
]);

export default router;
