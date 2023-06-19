import React from "react";
import styles from "../styles/home.module.scss";

const Home = () => {

  return (
    <div id="home" className={styles.homeDiv}>
      <div className={styles.homeMain}>
        <div className={styles.typewriter}>
          <p>Hi my name is <em>Soojin Kim</em>.</p>
          <p>I am a <em>Full Stack Developer</em>.</p>
        </div>
        
      </div>
    </div>
  )
};

export default Home;