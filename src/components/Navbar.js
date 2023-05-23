import React from "react";
import styles from "../styles/navbar.module.scss";

const Navbar = (props) => {

  return (
    <nav id="navbar" className={styles.navbarDiv}>
      <div className={styles.navbarLeft}>
        <a href="/" className={styles.logo}>Soojin Kim</a>
      </div>
      <div className={styles.navbarRight}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact Me</a>
      </div>
    </nav>
  )
};

export default Navbar;