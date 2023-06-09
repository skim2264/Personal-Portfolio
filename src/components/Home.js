import React from 'react';
import styles from "../styles/home.module.scss";

const Home = () => {
  return (
    <div id="home" className={styles.homeDiv}>
      <div className={styles.homeMain}></div>
      <div className={styles.typewriter}>
        <p>&lt;title&gt;Hi, my name is&lt;title&gt;</p>
        <h1>SOOJIN KIM</h1>
        <p className={styles.typingText}>I will bring your ideas to LIFE</p>
        <p>I am a <span>&lt;Full Stack Developer&gt;</span> with a passion to create new things. Welcome to my portfolio, let's create something remarkable together.</p>
        <div className={styles.line}></div>
      </div>
    </div>
  )
};

export default Home;