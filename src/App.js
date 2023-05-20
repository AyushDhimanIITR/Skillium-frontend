import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/LandingPage/LandingPage";
import Programs from "./Components/Programs/Programs";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Programs />
      <About />
      <Footer />
    </div>
  );
}

export default App;
