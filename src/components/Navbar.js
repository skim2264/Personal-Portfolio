import React from "react";
import styles from "../styles/navbar.module.scss";

const Navbar = () => {

  return (
    <nav id="navbar" className={styles.navbarDiv}>
      <div className={styles.navbarLeft}>
        <a href="/Personal-Portfolio" className={styles.logo}>SOOJIN KIM</a>
      </div>
      <div className={styles.navbarRight}>
        <a href="#about" className={styles.navLink}>&lt;About/&gt;</a>
        <a href="#skills" className={styles.navLink}>&lt;Skills/&gt;</a>
        <a href="#projects" className={styles.navLink}>&lt;Projects/&gt;</a>
        <a href="#contact" className={styles.navLink}>&lt;Contact/&gt;</a>
      </div>
    </nav>
  )
};

export default Navbar;