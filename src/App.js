import React, {Suspense, lazy} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader";
import GameScreen from "./Components/Dashboard/GameScreen";
const Navbar = lazy(() => import('./Components/Landing/Navbar/Navbar'));
const LandingPage = lazy(() => import("./Components/Landing/LandingPage/LandingPage"));
const Login = lazy(() => import('./Components/Login/Login'));
const Dashboard = lazy(() => import('./Components/Dashboard/Dashboard'));
const Leaderoard = lazy(() => import('./Components/Dashboard/Leaderboard/Leaderboard'));
const Level = lazy(() => import('./Components/Dashboard/Levels/Level'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Suspense fallback={<Loader />} >

        <Routes>
          <Route path="/" element={<Navbar />} >
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
          </Route>
            <Route path="/profile" element={<Dashboard />} />
            <Route path="/levels" element={<Level />} />
            <Route path="/gamescreen" element={<GameScreen />} />
            <Route path="/leaderboard" element={<Leaderoard />} />
        </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
