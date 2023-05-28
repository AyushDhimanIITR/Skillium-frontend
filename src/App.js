import React from "react";
import Navbar from "./Components/Landing/Navbar/Navbar";
import LandingPage from "./Components/Landing/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} >
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
          </Route>
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
