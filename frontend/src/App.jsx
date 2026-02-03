import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Todos from "./pages/Todos";

const App = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image (blurred) */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-md scale-105"
        style={{ backgroundImage: "url('/bg-todo.jpg')" }}
      ></div>

      {/* Routes container */}
      <div className="relative z-10 min-h-screen">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
