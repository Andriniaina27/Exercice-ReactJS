import './App.css';
// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Insert from "./pages/Insert";
import Read from "./pages/Read";
import Update from "./pages/Update";
function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
