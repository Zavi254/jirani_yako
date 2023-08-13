import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/users/login" element={<Login />} />
      <Route path="/users/register" element={<Register />} />
    </Routes>
  );
};

export default App;
