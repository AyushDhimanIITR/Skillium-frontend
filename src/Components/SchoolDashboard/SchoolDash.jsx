import React, { useEffect, useState } from "react";
import style from "./schooldash.module.css";
import Logo from "../../Assets/miniLogo.svg";
import { useNavigate } from "react-router-dom";
// import ProfilePicChanger from "./Levels/profilePicChanger";
import { useCookies } from "react-cookie";
import { API_DOMAIN } from "../../js/config";
import { Input, Table } from "antd";
import columns from "./column";
import { Outlet } from "react-router-dom";
import {SearchOutlined} from "@ant-design/icons";
import "../Dashboard/Leaderboard/table.css";
import logoutImg from "../../Assets/logout.svg";


const SchoolDashboard = () => {
  
  const [itemsData, setItemsData] = useState([]);
  const [schoolName, setSchoolName] = useState("");
  const [len, setLen] = useState(0);
  const [cookie] = useCookies();
  const [, removeCookie] = useCookies();
  const navigate = useNavigate();
  const { Search } = Input;
  const [query, setQuery] = useState("");


  useEffect(() => {
    fetch(`${API_DOMAIN}students/all/DPS`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLen(data.length);
        setSchoolName(data[0].school);
        setItemsData(data);
      })
      .catch((err) => console.log(err));
  }, [cookie]);

  const logout = () => {
    removeCookie("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const search = (data) => {
    return data.filter((item) => 
    item.name.toLowerCase().includes(query.toLowerCase())
    );
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
            School Dashboard 
          </a>
          <button className={style.sidebarBtn} onClick={logout}>
            <img src={logoutImg} alt="student-dashboard-logout-btn" />
            </button>
        </div>
      </div>
        <div className={style.navmenu}>
          <a href="#contact">
            School Dashboard 
          </a>
          <button className={style.sidebarBtn} onClick={logout}>
            <img src={logoutImg} alt="student-dashboard-logout-btn" />
            </button>
        </div>
      <div className={style.content}>
        <div className={style.banner}>
          <div className={style.school}>
            {/* <img src={Logo} alt="" /> */}
            <p>{schoolName}</p>
          </div>
          <div className={style.scoreCard}>
            <p className={style.rank}>{len}</p>
            <p className={style.totalStd} style={{ color: "#A9AAAB" }}>Total Students</p>
          </div>
        </div>
        <div className={style.search}>
            <form>
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
              <button type="submit">
                <SearchOutlined style={{fontSize:"20px"}}/>
              </button>
            </form>
          </div>
       
        <Table
          className={style.table}
          columns={columns}
          dataSource={search(itemsData)}
        />
      </div>
      <Outlet context={[query, setQuery]} />
    </div>
  );
};

export default SchoolDashboard;
