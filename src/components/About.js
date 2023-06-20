import React from "react";
import styles from "../styles/about.module.scss";

const About = () => {

  return (
    <div id="about" className={styles.aboutDiv}>
      <h1>About Me</h1>
      <div className={styles.aboutMain}>
        <div className={styles.blurb}>
          <p>Embark on a digital journey with me—a full-stack web developer and software enthusiast with a medical science background. With precision and a knack for problem-solving, I merge technology and creativity to build captivating digital experiences. Fuelled by a curiosity for travel, gaming, and new flavors, I bring a fresh perspective to coding. Let's connect and create something extraordinary!</p>
        </div>
        <div className={styles.interests}>
          <h2>My Hobbies</h2>
          <ul>
            <li>Travel </li>
            <li>Gaming</li>
            <li>Music</li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default About;