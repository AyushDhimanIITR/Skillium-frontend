import React from "react";
import Navbar from "./Components/Landing/Navbar/Navbar";
import LandingPage from "./Components/Landing/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Level from "./Components/Dashboard/Levels/Level";
import Leaderoard from "./Components/Dashboard/Leaderboard/Leaderboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} >
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
          </Route>
            <Route path="/profile" element={<Dashboard />} />
            <Route path="/levels" element={<Level />} />
            <Route path="/leaderboard" element={<Leaderoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
