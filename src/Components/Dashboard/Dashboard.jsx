import React, { useEffect, useState } from "react";
import style from "./dashboard.module.css";
import Logo from "../../Assets/miniLogo.svg";
import { ReactComponent as LeaderIcon } from "../../Assets/chart.svg";
import { ReactComponent as Profile } from "../../Assets/profile.svg";
import { ReactComponent as LevelIcon } from "../../Assets/gameConsole.svg";
import logoutImg from "../../Assets/logout.svg";
// import dp from "../../Assets/profilePic.png";
import edit from "../../Assets/edit.svg";
import Level from "./Levels/Level";
import { NavLink, useNavigate } from "react-router-dom";
import ProfilePicChanger from "./Levels/profilePicChanger";
import { useCookies } from "react-cookie";
import { API_DOMAIN } from "../../js/config";
import EditFormModal from "../Modal/Modal";

const Dashboard = () => {
  const path = window.location.pathname.slice(1);
  // console.log(path);
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [cookie] = useCookies();
  const [, removeCookie] = useCookies();
  const navigate = useNavigate();

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    fetch(`${API_DOMAIN}students/${localStorage.getItem("user")}`, {
      method: "GET",
      headers: {
        // Authorization: `Bearer ${localStorage.getItem('token')}`,
        Authorization: `Bearer ${cookie.token}`,
        Accept: "application/json",
        // "Content-Type": 'application/json'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const logout = () => {
    removeCookie("token");
    localStorage.removeItem("user");
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
          <a href="#contact">
            {!data.name ? "Student Dashboard" : `Hi, ${data.name}`}
          </a>
        </div>
      </div>
      <div className={style.sidebar}>
        <div className={style.itemCont}>
          <button className={style.sidebarBtn}>
            <NavLink
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/leaderboard"
            >
              {/* <img src={chart} alt="student-dashboard-profile-btn" /> */}
              <LeaderIcon className={style.LeaderIcon} />
            </NavLink>
          </button>
          <button className={style.sidebarBtn}>
            <NavLink
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/levels"
            >
              {/* <img src={gameConsole} alt="student-dashboard-profile-btn" /> */}
              <LevelIcon className={style.LevelIcon} />
            </NavLink>
          </button>
          <button className={style.sidebarBtn}>
            <NavLink
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/profile"
            >
              {/* <img src={profile} alt="student-dashboard-profile-btn" /> */}
              <Profile className={style.profileIcon} />
            </NavLink>
          </button>
        </div>
        <div className={style.logout}>
          <button className={style.sidebarBtn} onClick={logout}>
            <img src={logoutImg} alt="student-dashboard-logout-btn" />
          </button>
        </div>
      </div>
      {path === "profile" ? (
        <div className={style.content}>
          <div className={style.profile}>
            <p>{path}</p>
            <div className={style.profileCont} >
              <button className={style.sidebarBtnMobileView} onClick={logout}>
                <img src={logoutImg} alt="student-dashboard-logout-btn" />
              </button>
              <img
                className={style.dp}
                alt="profile pic"
                src={data.profilePhoto}
              />
            </div>
          </div>
          <div className={style.nameCont}>
            <ProfilePicChanger data={data} />
            {/* <div className={style.name}>
              <p>Moksh Singhal</p>
              </div>
              <Avatar size={64} icon="user" />
            <img className={style.profileImg} src={dp} alt="profile-pic" /> */}
            <div className={style.scoreCard}>
              <div>
                <p className={style.rank}>{data.rank}</p>
                <p style={{ color: "#A9AAAB" }}>Rank</p>
              </div>
              <hr className={style.border} />
              <div>
                <p className={style.diamonds}>{data.totalDiamonds}</p>
                <p style={{ color: "#A9AAAB" }}>Diamonds</p>
              </div>
            </div>
            <div className={style.profileCard}>
              <p>Name : {data.name}</p>
              <p>Class :{data.grade} </p>
              <p>School : {data.school} </p>
            </div>
            {/* <div className={style.editBtn}> */}
            <button className={style.editBtn} onClick={toggleModal}>
              Edit Profile &nbsp; <img src={edit} alt="edit profile button" />
            </button>
            {modal && <EditFormModal setModal={setModal} />}
            {/* </div> */}
          </div>
          <div className={style.navmenu}>
            <div className={style.itemCont}>
              <button className={style.sidebarBtn}>
                <NavLink to="/leaderboard">
                  <LeaderIcon className={style.LeaderIcon} />
                  {/* <img src={chart} alt="student-dashboard-profile-btn" /> */}
                </NavLink>
              </button>
              <button className={style.sidebarBtn}>
                <NavLink to="/levels">
                  <LevelIcon className={style.profileIcon} />
                  {/* <img src={gameConsole} alt="student-dashboard-profile-btn" /> */}
                </NavLink>
              </button>
              <button className={style.sidebarBtn}>
                <NavLink to="/profile">
                  <Profile className={style.profileIcon} />
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Level />
      )}
    </div>
  );
};

export default Dashboard;
