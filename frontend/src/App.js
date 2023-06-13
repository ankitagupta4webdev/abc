import "./App.css";
import React from "react";
import Login from "./login";
import { Routes, Route } from "react-router-dom";
import Signup from "./signup";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
