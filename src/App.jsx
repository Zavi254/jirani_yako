import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import SearchMiddle from "./pages/SearchMiddle";

const App = () => {

  const mainUrl = import.meta.env.local.VITE_REACT_APP_API_URL;

  useEffect(() => {
    // Define a function that makes the API request
    const fetchData = async () => {
      try {
        // Make your API request here
        const response = await fetch(`${mainUrl}/products`);
        const data = await response.json();
        console.log(data); // Do something with the data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function immediately when the component mounts
    fetchData();

    // Set up a repeating timer with setInterval
    const intervalId = setInterval(() => {
      fetchData(); // Make the API request every 10 minutes
    }, 10 * 60 * 1000); // 10 minutes in milliseconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

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
