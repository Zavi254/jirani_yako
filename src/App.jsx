import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="login" element={<Login />} />)
);

const App = ({ routes }) => {
  return <RouterProvider router={router} />;
};

export default App;
