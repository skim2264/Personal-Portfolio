import React from "react";
import styles from "../styles/about.module.scss";

const About = () => {

  return (
    <div id="about" className={styles.aboutDiv}>
      <div className={styles.aboutMain}>
        <div className={styles.typewriter}>
          <p>Hi my name is <em>Soojin Kim</em>.</p>
          <p>I am a <em>Full Stack Developer</em>.</p>
        </div>
        
      </div>
    </div>
  )
};

export default About;