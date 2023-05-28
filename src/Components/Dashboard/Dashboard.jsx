import React from "react";
import style from "./dashboard.module.css";
import Logo from "../../Assets/miniLogo.svg";
import chart from "../../Assets/chart.svg";
import profile from "../../Assets/profile.svg";
import gameConsole from "../../Assets/gameConsole.svg";
import logout from "../../Assets/logout.svg";
import dp from "../../Assets/profilePic.png";
import edit from "../../Assets/edit.svg";

const Dashboard = () => {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
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
            <img src={chart} alt="student-dashboard-profile-btn" />
          </button>
          <button className={style.sidebarBtn}>
            <img src={gameConsole} alt="student-dashboard-profile-btn" />
          </button>
          <button className={style.sidebarBtn}>
            <img src={profile} alt="student-dashboard-profile-btn" />
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
          <p>PROFILE</p>
          <img className={style.dp} alt="profile picture" src={dp} />
        </div>
        <div className={style.nameCont}>
          <div className={style.name}>
            <p>Moksh Singhal</p>
          </div>
          <img className={style.profileImg} src={dp} alt="profile-pic" />
          <div className={style.scoreCard}>
            <div>
              <p className={style.rank}>16</p>
              <p style={{color:"#A9AAAB"}}>Rank</p>
            </div>
            <hr className={style.border} />
            <div>
              <p className={style.diamonds}>9</p>
              <p style={{color:"#A9AAAB"}}>Diamonds</p>
            </div>
          </div>
          <div className={style.profileCard}>
            <p>Name : Moksh Singhal</p>
            <p>Class : 6-A</p>
            <p>School : Delhi Public School</p>
          </div>
          {/* <div className={style.editBtn}> */}
            <button className={style.editBtn}>Edit Profile &nbsp; <img src={edit} alt="edit profile button" /></button>
          {/* </div> */}
        </div>
        <div className={style.navmenu}>
        <div className={style.itemCont}>
          <button className={style.sidebarBtn}>
            <img src={chart} alt="student-dashboard-profile-btn" />
          </button>
          <button className={style.sidebarBtn}>
            <img src={gameConsole} alt="student-dashboard-profile-btn" />
          </button>
          <button className={style.sidebarBtn}>
            <img src={profile} alt="student-dashboard-profile-btn" />
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
