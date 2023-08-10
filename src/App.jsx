import React from "react";
import { Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
