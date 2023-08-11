import React, { useState } from "react";
import styles from "../styles/navbar.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav id="navbar" className={styles.navbarDiv}>
      <div className={styles.navbarLeft}>
        <a href="/Personal-Portfolio" className={styles.logo}>SOOJIN KIM</a>
      </div>
      <FontAwesomeIcon icon={icon({name:'bars'})} size="5x" className={styles.menuIcon} onClick={() => {setIsNavExpanded(!isNavExpanded);}}></FontAwesomeIcon>
      <div className={isNavExpanded ? `${styles.navbarRight} ${styles.expanded}` : `${styles.navbarRight}`}>
        <ul>
          <li><a href="#about" className={styles.navLink} onClick={() => {setIsNavExpanded(false);}}>&lt;About/&gt;</a></li>
          <li><a href="#skills" className={styles.navLink} onClick={() => {setIsNavExpanded(false);}}>&lt;Skills/&gt;</a></li>
          <li><a href="#projects" className={styles.navLink} onClick={() => {setIsNavExpanded(false);}}>&lt;Projects/&gt;</a></li>
          <li><a href="#contact" className={styles.navLink} onClick={() => {setIsNavExpanded(false);}}>&lt;Contact/&gt;</a></li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;