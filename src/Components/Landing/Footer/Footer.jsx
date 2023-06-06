import React from "react";
import styles from "./footer.module.css";
import Logo from "../../../Assets/logo.svg";
import fb from "../../../Assets/fb.svg";
import insta from "../../../Assets/insta.svg";
import linkedin from "../../../Assets/linkedin.svg";
import {FacebookFilled, LinkedinFilled, InstagramFilled} from '@ant-design/icons';

const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.gridCont}>
            <div className={styles.gridItm}>
                <div className={styles.gridHead}><img src={Logo} alt="" /></div>
                {/* <div className={styles.gridDesc}>We will facilitate a game-based curriculum for various competencies essential for the overall development of a student.</div> */}
            </div>
            <div className={styles.gridItm}>
                <div id={styles.link} className={styles.gridHead}>Links</div>
                <div className={styles.socials}>
                <a href='/'><FacebookFilled style={{color:'#fff', fontSize:'36px'}} /> </a>
                <a href='/'><LinkedinFilled style={{color:'#fff', fontSize:'36px'}} /> </a>
                <a href='/'><InstagramFilled style={{color:'#fff', fontSize:'36px'}} /> </a>
                    {/* <a href="/"><img className={styles.fb} src={fb} alt="" /> </a>  */}
                    {/* <a href="/"><img src={linkedin} alt="" /> </a>  */}
                    {/* <a href="/"><img src={insta} alt="" /> </a>  */}
                </div>
            </div>
            <div className={styles.gridItm}>
                <div id={styles.link} className={styles.gridHead}>Get in Touch</div>
                <div className={styles.gridDesc}>Skillium Labs, MAC 2nd Floor, IIT Roorkee</div>
                <div className={styles.gridDesc}>+91  9518205262</div>
            </div>
        </div>
        </div>
    )
}

export default Footer;