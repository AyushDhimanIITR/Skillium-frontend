import React from "react";
import Logo from "../../Assets/logo.svg";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.mainCont}>
      <div className={style.logo}>
        <a href="/"><img src={Logo} alt="" /></a>
      </div>
      <div className={style.menu}>
        <a href="#">Home</a>
        <a href="#">Programs</a>
        <a href="#">About Us</a>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
