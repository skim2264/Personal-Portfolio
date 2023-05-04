import React, {useState, useEffect} from "react";
import backgroundImg from "../assets/aboutBackground.jpg";
import styles from "../styles/about.module.scss";

const About = () => {

  return (
    <div id="about">
      <img src={backgroundImg} alt="A mountain" className={styles.backgroundImg}></img>
    </div>
  )
};

export default About;