import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader";
import GameScreen from "./Components/Dashboard/GameScreen";
import { API_DOMAIN } from "./js/config";
import { useCookies } from "react-cookie";
import ErrorPage from "./Components/Error";
const SchoolDashboard = lazy(() => import('./Components/SchoolDashboard/SchoolDash'));
const Navbar = lazy(() => import('./Components/Landing/Navbar/Navbar'));
const LandingPage = lazy(() => import("./Components/Landing/LandingPage/LandingPage"));
const Login = lazy(() => import('./Components/Login/Login'));
const Dashboard = lazy(() => import('./Components/Dashboard/Dashboard'));
const Leaderoard = lazy(() => import('./Components/Dashboard/Leaderboard/Leaderboard'));
const Level = lazy(() => import('./Components/Dashboard/Levels/Level'));

function App() {

  const [isAuth, setIsAuth] = useState(null);
  const [cookie] = useCookies();

  useEffect(() => {
    fetch(`${API_DOMAIN}students/${localStorage.getItem('user')}`, {
      method: "GET",
      headers: {
        // Authorization: `Bearer ${localStorage.getItem('token')}`,
        Authorization: `Bearer ${cookie.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setIsAuth(!isAuth);
        setIsAuth(data)
      })
      .catch((err) => console.log(err));
  }, [cookie]);

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loader />} >
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<Navbar />} >
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
            </Route>
            {isAuth ? (
              <> 

                <Route path="/profile" element={<Dashboard />} />
                <Route path="/levels" element={<Level />} />
                <Route path="/gamescreen" element={<GameScreen />} />
                <Route path="/leaderboard" element={<Leaderoard />} />
              <Route path="/school" element={<SchoolDashboard />} />

             </> 
            ) : <> <Route element={<Loader />} /> 
            </>} 
          </Routes>
      </Suspense>
    </BrowserRouter>
    </div >
  );
}

export default App;
