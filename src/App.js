import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} >
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
