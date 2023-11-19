import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Tasks from "./pages/Tasks/tasks";
import Nav from "./components/navbar/navbar";

function App() {
  return (
    <>
      <div className="containerApp">
        <div className="nav">
          <Nav/>
        </div>
        <div className="Router">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tareas" element={<Tasks />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
