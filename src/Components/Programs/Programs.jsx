import React from "react";
import style from "./programs.module.css";
import img from "../../Assets/Screenshot.png";
import curiosityIcon from "../../Assets/faculty-curiosityIcon.svg";
import ideaIcon from "../../Assets/ideaIcon.svg";
import moneyIcon from "../../Assets/moneyIcon.svg";
import noteIcon from "../../Assets/noteIcon.svg";
import timeIcon from "../../Assets/timeIcon.svg";
import careerIcon from "../../Assets/careerIcon.svg";
import { Outlet } from "react-router-dom";
import About from "../About/About";

const Programs = () => {
  return (
    <>
      <div className={style.container} id="programs">
        <div className={style.title}>Our Current Programs:</div>
        <div className={style.topBlock}>
        <div className={style.blob} />
          <div className={style.head}>
            Financial Literacy
            <div className={style.btnCont}>
              <button className={style.duration}>
                Course Duration: 1 Month
              </button>
              <button className={style.sessions}>4 Sessions</button>
            </div>
          </div>
          <div className={style.columns}>
            <div className={style.curriculum}>
              <p>Curriculum Includes</p>
              <ul>
                <li>Budgeting and Saving</li>
                <li>Basics of Banking</li>
                <li>Debt Risk Management</li>
                <li>Impulse Purchasing</li>
              </ul>
            </div>
            <div className={style.learning}>
              <p>Learning Outcomes</p>
              <ul>
                <li>How to make a budget</li>
                <li>How to choose a bank</li>
                <li>Debt Management</li>
                <li>How to avoid impulse purchasing.</li>
              </ul>
            </div>
            <div className={style.img}>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
        <div className={style.whyBlock}>
          <div className={style.title}>Why Financial Literacy?</div>
          <div className={style.gridCont}>
            <div className={style.gridItem}>
              <img className={style.gridImg} src={curiosityIcon} alt="" />
              <span>Financial Freedom</span>
            </div>
            <div className={style.gridItem}>
              <img className={style.gridImg} src={ideaIcon} alt="" />
              <span>Money Management-</span> basic necessity
            </div>
            <div className={style.gridItem}>
              <img className={style.gridImg} src={moneyIcon} alt="" />
              Helps you develop a <span>habit of saving</span>
            </div>
            <div className={style.gridItem}>
              <img className={style.gridImg} src={noteIcon} alt="" />
              Helps you make <span>smart financial decisions</span>
            </div>
            <div className={style.gridItem}>
              <img className={style.gridImg} src={timeIcon} alt="" />
              Teaches kids <span>time value of money</span>
            </div>
            <div className={style.gridItem}>
              <img className={style.gridImg} src={careerIcon} alt="" />
              Exposure to<span> career prospects</span> in finance
            </div>
          </div>
        </div>
        <About />
      </div>
      <Outlet />
    </>
  );
};

export default Programs;
