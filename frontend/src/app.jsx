import React from "react";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Edit from "./components/Edit.jsx";
import Create from "./components/Create.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products/update/:id" element={<Edit />} />
      <Route path="/products/insert" element={<Create />} />
    </Routes>
  );
};

export default App;
