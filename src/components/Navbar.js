import React, {useState, useEffect} from "react";
import styles from "../styles/navbar.module.scss";

const Navbar = (props) => {

  return (
    <nav id="navbar" className={styles.navbarDiv}>
      <div className={styles.navbarLeft}>
        <img src="" alt="logo"></img>
      </div>
      <div className={styles.navbarRight}>
        <a href="">About</a>
        <a href="">Skills</a>
        <a href="">Projects</a>
        <a href="">Contact Me</a>
      </div>
    </nav>
  )
};

export default Navbar;