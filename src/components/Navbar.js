import React from "react";
import styles from "../styles/navbar.module.scss";

const Navbar = () => {

  return (
    <nav id="navbar" className={styles.navbarDiv}>
      <div className={styles.navbarLeft}>
        <a href="/Personal-Portfolio" className={styles.logo}>Soojin Kim</a>
      </div>
      <div className={styles.navbarRight}>
        <a href="#about" className={styles.navLink}>About</a>
        <a href="#skills" className={styles.navLink}>Skills</a>
        <a href="#projects" className={styles.navLink}>Projects</a>
        <a href="#contact" className={styles.navLink}>Contact Me</a>
      </div>
    </nav>
  )
};

export default Navbar;