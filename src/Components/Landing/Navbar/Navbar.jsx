import React from "react";
import Logo from "../../../Assets/logo.svg";
import style from "./navbar.module.css";
import logoMobileView from "../../../Assets/mobileLogo.png";
import { Outlet, useNavigate } from "react-router-dom";
import profilePic from "../../../Assets/profile.svg";

const Navbar = () => {
  const path = window.location.pathname;
  console.log(path);
  const navigate = useNavigate();
  const user = localStorage.getItem('user');
  return (
    <>
    <div className={style.mainCont}>
      <div className={style.logo}>
        <a href="/" aria-label="Return to homepage"><img className={style.Icon} src={Logo} alt="" /></a>
        <a href="/" aria-label="Return to homepage"><img className={style.logoMobileView} src={logoMobileView} alt="" /></a>
      </div>
      <div className={style.menu}>
       {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Home</a>
        <a href={`${path === "/login"? `${"/"}`: `${"#programs"}`}`}>Programs</a>
        <a href={`${path === "/login"? `${"/"}`: `${"#contact"}`}`}>About Us</a>
        {/* <button className={style.hideLoginBtn} onClick={() => navigate("/login")}>Sign In</button> */}
        {
          !user ? (
            <button className={`${path==="/login" ? `${style.hideLoginBtn}`: ""}`} onClick={() => navigate("/login")}>Sign In</button>
          ):( 
              <img src={profilePic} style={{cursor:"pointer"}} onClick={() => navigate("/profile")} />
          )
        }

      </div>
      <div className={style.menuMobileView}>
        {
          !user ? (
            <button className={`${path==="/login" ? `${style.hideLoginBtn}`: ""}`} onClick={() => navigate("/login")}>Sign In</button>
          ):( 
              <img src={profilePic} style={{cursor:"pointer"}} onClick={() => navigate("/profile")} />
          )
        }
      </div>
    </div>
      <Outlet />
    </>
  );
};

export default Navbar;
