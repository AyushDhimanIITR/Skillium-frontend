import React from "react";
import style from "./level.module.css";
import Logo from "../../../Assets/miniLogo.svg";
import chart from "../../../Assets/chart.svg";
import gameConsole from "../../../Assets/gameConsole.svg";
import profile from "../../../Assets/profile.svg";
import dp from "../../../Assets/profilePic.png";
import logout from "../../../Assets/logout.svg";
import { NavLink, useNavigate } from "react-router-dom";
import gameBg from "../../../Assets/Rectangle67.png";
import pcOnly from "../../../Assets/pcOnly.svg";

const Level = () => {
  const path = window.location.pathname.slice(1);
  console.log(path);

  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#141414",
      }}
    >
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
        {/* <div className={style.gridContainer}>
          <div className={style.gridHead}>Level</div>
          <div className={style.gridHead}>Title</div>
          <div className={style.gridHead}>Diamonds</div>
          <div className={style.gridHead}>Score</div>
          <div className={style.gridItem}>
            <img src={gameBg} alt="game-thumbnail" />
          </div>
          <div className={style.gridItem}>The Art of Budgeting</div>
          <div className={style.gridItem}>45</div>
          <div className={style.gridItem}>45</div>
          <div className={style.gridItem}>
            <img src={gameBg} alt="game-thumbnail" />
          </div>
          <div className={style.gridItem}>Banking Toolkit</div>
          <div className={style.gridItem}>45</div>
          <div className={style.gridItem}>45</div>
          <div className={style.gridItem}>
            <img src={gameBg} alt="game-thumbnail" />
          </div>
          <div className={style.gridItem}>Level 3</div>
          <div className={style.gridItem}>45</div>
          <div className={style.gridItem}>45</div>
          <div className={style.gridItem}>
            <img src={gameBg} alt="game-thumbnail" />
          </div>
          <div className={style.gridItem}>Level 4</div>
          <div className={style.gridItem}>45</div>
          <div className={style.gridItem}>45</div>
        </div> */}
        <div className={style.game}>
          <iframe
            id="webgl_iframe"
            frameborder="0"
            allow="autoplay; fullscreen; vr"
            allowfullscreen=""
            allowvr=""
            mozallowfullscreen="true"
            src="https://play.unity.com/webgl/7e334cf1-4d0c-4dd5-a5b1-dd6046e76b22?screenshot=false&embedType=embed"
            width="1000"
            height="960"
            onmousewheel=""
            webkitallowfullscreen="true"
          ></iframe>
        </div>
      </div>
      <div className={style.pcOnly}>
        <div className={style.pcOnlyCard}>
          <img src={pcOnly} alt="pcOnlyCard" />
          <p>Available on PC only</p>
          <button onClick={() => navigate("/profile")}>
            Go back to profile
          </button>
        </div>
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

export default Level;
