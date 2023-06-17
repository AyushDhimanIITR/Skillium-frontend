import React from "react";
import Logo from "../../../Assets/logo.svg";
import style from "./navbar.module.css";
import { Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const path = window.location.pathname;
  console.log(path);
  const navigate = useNavigate();
  return (
    <>
    <div className={style.mainCont}>
      <div className={style.logo}>
        <a href="/" aria-label="Return to homepage"><img src={Logo} alt="" /></a>
      </div>
      <div className={style.menu}>
       {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">Home</a>
        <a href="#programs">Programs</a>
        <a href="#contact">About Us</a>
        {/* <button className={style.hideLoginBtn} onClick={() => navigate("/login")}>Sign In</button> */}
        <button className={`${path==="/login" ? `${style.hideLoginBtn}`: ""}`} onClick={() => navigate("/login")}>Sign In</button>
      </div>
    </div>
      <Outlet />
    </>
  );
};

export default Navbar;
