import React, { Suspense } from "react";
import style from "./landingPage.module.css";
import illustration from "../../../Assets/HomePage.png";
import thinkIcon from "../../../Assets/list (1).svg";
import moneyIcon from "../../../Assets/list (2).svg";
import searchIcon from "../../../Assets/list (3).svg";
import speakIcon from "../../../Assets/list (4).svg";
import handIcon from "../../../Assets/list (5).svg";
// import Programs from "../Programs/Programs";
import { Outlet } from "react-router-dom";
const Programs = React.lazy(() => import("../Programs/Programs"));

const LandingPage = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.contentLeft}>
            <p className={style.heading}>Empower your child with</p>
            <span className={style.heading2}>Financial Literacy</span>
            <div className={style.blob} />
            <p className={style.tagLine}>
              Highly interactive and personalized sessions on financial literacy
              for students.
            </p>

            <a
              href="https://forms.gle/PE57e8LDndV7VpGMA"
              aria-label="Book a free demo"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button className={style.bookBtn}>
                Book A Free Demo For Your School
                <span className={style.arrowIcon}></span>
              </button>
            </a>
          </div>
          <div className={style.contentRight}>
            <img loading="lazy" src={illustration} alt="" />
          </div>
          <a
            href="https://forms.gle/PE57e8LDndV7VpGMA"
            aria-label="Book a free demo"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button className={style.bookBtnMobileView}>
              Book A Free Demo For Your School{" "}
              <span className={style.arrowIcon}></span>
            </button>
          </a>
        </div>
        <div className={style.centerBlock}>
          <div className={style.blob} />
          <div className={style.blockLeft}>Why Life Skills?</div>
          <div className={style.blockRight}>
            <ul>
              <li>
                <img
                  loading="lazy"
                  className={style.listIcon}
                  src={searchIcon}
                  alt=""
                />
                Learning these skills prepares you to navigate life challenges
              </li>
              <li>
                <img
                  loading="lazy"
                  className={style.listIcon}
                  src={speakIcon}
                  alt=""
                />
                Allows people to express themselves in the society
              </li>
              <li>
                <img
                  loading="lazy"
                  className={style.listIcon}
                  src={handIcon}
                  alt=""
                />
                Equips students for independent adulthood
              </li>
              <li>
                <img
                  loading="lazy"
                  className={style.listIcon}
                  src={thinkIcon}
                  alt=""
                />
                Enhanced decision-making abilities
              </li>
              <li>
                <img
                  loading="lazy"
                  className={style.listIcon}
                  src={moneyIcon}
                  alt=""
                />
                Better Money Management
              </li>
            </ul>
          </div>
        </div>
        <Suspense fallback={<div style={{ color: "#FFF" }}>Loading...</div>}>
          <Programs />
        </Suspense>
      </div>
      <Outlet />
    </>
  );
};

export default LandingPage;
