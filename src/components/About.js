import React from "react";
import styles from "../styles/about.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const About = () => {

  return (
    <div id="about" className={styles.aboutDiv}>
      <h1>About Me</h1>
      <div className={styles.aboutMain}>
        <div className={styles.blurb}>
          <p>Embark on a digital journey with me—a full-stack web developer and software enthusiast with a medical science background. With precision and a knack for problem-solving, I merge technology and creativity to build captivating digital experiences. Fuelled by a curiosity for travel, gaming, and new flavors, I bring a fresh perspective to coding. Let's connect and create something extraordinary!</p>
        </div>
        <div className={styles.interests}>
          <ul>
            <li><FontAwesomeIcon icon={icon({name:"plane"})} border inverse/>Travel</li>
            <li><FontAwesomeIcon icon={icon({name:"gamepad"})} border inverse/>Gaming</li>
            <li><FontAwesomeIcon icon={icon({name:"music"})} border inverse/>Music</li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default About;