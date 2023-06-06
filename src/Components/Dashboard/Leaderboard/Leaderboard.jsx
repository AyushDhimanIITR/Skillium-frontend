import React from "react";
import style from "./lb.module.css";
import Logo from "../../../Assets/miniLogo.svg";
import chart from "../../../Assets/chart.svg";
import gameConsole from "../../../Assets/gameConsole.svg";
import profile from "../../../Assets/profile.svg";
import dp from "../../../Assets/profilePic.png";   
import logout from "../../../Assets/logout.svg";
import {NavLink} from "react-router-dom";

const Leaderoard = () => {
  const path = window.location.pathname.slice(1);
  console.log(path);
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
        <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to="/leaderboard">
          <img src={chart} alt="student-dashboard-profile-btn" />
        </NavLink>
        </button>
        <button className={style.sidebarBtn}>
        <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to="/levels">
          <img src={gameConsole} alt="student-dashboard-profile-btn" />
        </NavLink>
        </button>
        <button className={style.sidebarBtn}>
        <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to="/profile">
          <img src={profile} alt="student-dashboard-profile-btn" />
        </NavLink>
        </button>
      </div>
      <div className={style.logout}>
        <button className={style.sidebarBtn}>
          <img src={logout} alt="student-dashboard-logout-btn" />
        </button>
      </div>
    </div>
    <div className={style.content}>
    <div className={style.profile}>
        <p>{path}</p>
        <img className={style.dp} alt="profile picture" src={dp} />
      </div>
      Hi
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt optio rerum, iure soluta et ut quibusdam labore dolores sit autem dolore hic distinctio nam fugiat totam, quod odio ab dolorum.
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque facilis suscipit consequatur at ipsum error autem reprehenderit rem illum harum a iusto molestiae quasi, minus totam delectus sapiente omnis minima vel!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempore adipisci commodi neque dignissimos recusandae vel, est nemo veniam alias autem repudiandae laborum, ullam temporibus inventore numquam quo ipsa hic eaque? Consectetur, architecto! Rem omnis sequi, in reiciendis corporis quisquam beatae earum adipisci sint aliquid debitis obcaecati voluptatibus error enim voluptate quod iure dolor assumenda eligendi deserunt laudantium quis illo. Fugit soluta, labore est deserunt perferendis ducimus nihil rem voluptatum enim exercitationem. Similique reprehenderit odit reiciendis sint quod illum voluptatem, autem ducimus ex aliquid. Ut, nulla repellat et tempora ipsam repudiandae soluta aspernatur laboriosam autem accusamus numquam error amet dolorem sit asperiores odio corrupti fugit culpa hic dolore?
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
