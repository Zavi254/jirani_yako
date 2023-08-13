import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import SearchMiddle from "./pages/SearchMiddle";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/users/login" element={<Login />} />
      <Route path="/users/register" element={<Register />} />
      <Route path="/search-middle" element={<SearchMiddle />} />
    </Routes>
  );
};

export default App;
