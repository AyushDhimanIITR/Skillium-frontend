import React, { useState, useEffect } from "react";
import style from "./lb.module.css";
import Logo from "../../../Assets/miniLogo.svg";
import chart from "../../../Assets/chart.svg";
import gameConsole from "../../../Assets/gameConsole.svg";
import profile from "../../../Assets/profile.svg";
import dp from "../../../Assets/profilePic.png";
import logout from "../../../Assets/logout.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { Table } from "antd";
import { useCookies } from "react-cookie";
import columns from "./column";
import { API_DOMAIN } from "../../../js/config";
import "./table.css";

const Leaderoard = () => {
  const path = window.location.pathname.slice(1);
  // console.log(path);

  const [cookie] = useCookies();
  const [itemsData, setItemsData] = useState([]);
  const [, removeCookie] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_DOMAIN}students/all`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItemsData(data);
      })
      .catch((err) => console.log(err));
  }, [cookie]);

  // console.log(itemsData.data);

  const logoutBtn = () => {
    removeCookie("token");
    localStorage.removeItem('user');
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={style.header}>
        <div className={style.logo}>
          <a href="/">
            <img src={Logo} alt="" />
          </a>
          &nbsp; | &nbsp;
          <a href="/">Skillium Labs</a>
        </div>
        <div className={style.menu}>
          <a href="#contact">Student Dashboard</a>
        </div>
      </div>
      <div className={style.sidebar}>
        <div className={style.itemCont}>
          <button className={style.sidebarBtn}>
            <NavLink
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/leaderboard"
            >
              <img src={chart} alt="student-dashboard-profile-btn" />
            </NavLink>
          </button>
          <button className={style.sidebarBtn}>
            <NavLink
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/levels"
            >
              <img src={gameConsole} alt="student-dashboard-profile-btn" />
            </NavLink>
          </button>
          <button className={style.sidebarBtn}>
            <NavLink
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/profile"
            >
              <img src={profile} alt="student-dashboard-profile-btn" />
            </NavLink>
          </button>
        </div>
        <div className={style.logout}>
          <button onClick={logoutBtn} className={style.sidebarBtn}>
            <img src={logout} alt="student-dashboard-logout-btn" />
          </button>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.profile}>
          <p>{path}</p>
          <img className={style.dp} alt="profile pic" src={dp} />
        </div>
        <Table
          className={style.table}
          columns={columns}
          dataSource={itemsData}
        />
      </div>
      <div className={style.navmenu}>
        <div className={style.itemCont}>
          <button className={style.sidebarBtn}>
            <NavLink to="/leaderboard">
              <img src={chart} alt="student-dashboard-profile-btn" />
            </NavLink>
          </button>
          <button className={style.sidebarBtn}>
            <NavLink to="/levels">
              <img src={gameConsole} alt="student-dashboard-profile-btn" />
            </NavLink>
          </button>
          <button className={style.sidebarBtn}>
            <NavLink to="/profile">
              <img src={profile} alt="student-dashboard-profile-btn" />
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leaderoard;
