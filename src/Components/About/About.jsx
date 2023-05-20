import React from "react";
import style from "./about.module.css";
import idea from "../../Assets/idea.svg";
import affordable from "../../Assets/affordable.svg";
import trend from "../../Assets/trend.svg";
import game from "../../Assets/game.svg";
import note from "../../Assets/note.svg";

const About = () => {
  return (
    <div className={style.aboutCont}>
      <div className={style.main}>
        <div className={style.line} />
        <div className={style.head}>What is Skillium Labs</div>
        <div className={style.desc}>
          We at Skillium Labs thrive to revolutionize education by increasing
          school students' exposure towards overall development. We are trying
          to achieve this by allowing them to explore a plethora of domains
          using an extremely engaging and interactive curriculum.With our
          innovative approach to education, we are confident that we can make a
          positive and lasting impact on the lives of students.
        </div>
      </div>
      <div className={style.midBlock}>
        <div className={style.heading}>
        Innovative learning for a <br /> smarter tomorrow
        </div>
        <div className={style.gridCont}>
            <div className={style.gridItm}>
                <div className={style.gridHead}>Game Based Curriculum</div>
                <div className={style.gridDesc}>We will facilitate a game-based curriculum for various competencies essential for the overall development of a student.</div>
            </div>
            <div className={style.gridItm}>
                <div className={style.gridHead}>Knowledgebase</div>
                <div className={style.gridDesc}>The platform will be designed to provide a comprehensive learning experience that equips students with practical life skills</div>
            </div>
            <div className={style.gridItm}>
                <div className={style.gridHead}>Education</div>
                <div className={style.gridDesc}>The platform utilizes personalized game based learning to create a stimulating and engaging learning environment that is unparalleled.</div>
            </div>
        </div>
      </div>
      <div className={style.whySkLabs}>
        <div className={style.head2}>
            Why Skillium Labs?
        </div>
        <div className={style.gridContainer}>
            <div className={style.gridItem}>
                <div className={style.gridImage}><img src={idea} alt="" /> </div>
                <div className={style.gridDesc}>1st to teach life-skills using Immersive Experience</div>
            </div>
            <div id={style.mid} className={style.gridItem}>
                <div className={style.gridImage}><img src={affordable} alt="" /> </div>
                <div className={style.gridDesc}>Affordable per student</div>
            </div>
            <div className={style.gridItem}>
                <div className={style.gridImage}><img src={game} alt="" /> </div>
                <div className={style.gridDesc}>Personalised Game based learning every week</div>
            </div>
            <div className={style.gridItem}>
                <div className={style.gridImage}><img src={trend} alt="" /> </div>
                <div className={style.gridDesc}>Ensuring post school overall development</div>
            </div>
            <div className={style.gridItem}>
                <div className={style.gridImage}><img src={note} alt="" /> </div>
                <div className={style.gridDesc}>Well organized curriculum</div>
            </div>
        </div>
      </div>
      <div className={style.contact}>
        <div className={style.contactHead}>
        Still have any doubts?  
        </div>
        <button className={style.contactBtn}>
            Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;
