import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import styles from "../styles/skills.module.scss";
import expressIcon from "../assets/express.svg";
import pugIcon from "../assets/pugjs.svg";
import mongoDBIcon from "../assets/mongodb.svg";
import firebaseIcon from "../assets/firebase.svg";
import webpackIcon from "../assets/webpack.svg";
import jestIcon from "../assets/jest.svg";
import typescriptIcon from "../assets/typescript.svg";

const Skills = () => {

  return (
    <div id="skills" className={styles.skillsContainerDiv}>
      <div>
        <h1>Skills</h1>
      </div>
      <div className={styles.skillsDiv}>
        <div className={styles.iconDiv}>
          <div className={styles.icons}>
            <img src={typescriptIcon} alt="Typescript icon" className={styles.skillIcon}/>
          </div>
          <p className={styles.skillName}>Javascript</p>
        </div>
        <div className={styles.iconDiv}>
        <img src={typescriptIcon} alt="Typescript icon" className={styles.skillIcon}/>
          <p className={styles.skillName}>Typescript</p>
        </div>
        <div className={styles.iconDiv}>
          <FontAwesomeIcon icon={icon({name:'html5', style:'brands'})} size="5x" className={styles.skillIcon}></FontAwesomeIcon>
          <p className={styles.skillName}>HTML</p>
        </div>
        <div className={styles.iconDiv}>
          <div className={styles.icons}>
            <FontAwesomeIcon icon={icon({name:'css3-alt', style:'brands'})} size="5x" className={styles.skillIcon}></FontAwesomeIcon>
          </div>
          <p className={styles.skillName}>CSS</p>
        </div>
        <div className={styles.iconDiv}>
        <FontAwesomeIcon icon={icon({name:'sass', style:'brands'})} size="5x" className={styles.skillIcon}></FontAwesomeIcon>
          <p className={styles.skillName}>Sass</p>
        </div>
        <div className={styles.iconDiv}>
          <FontAwesomeIcon icon={icon({name:'react', style:'brands'})} size="5x" className={styles.skillIcon}></FontAwesomeIcon>
          <p className={styles.skillName}>React</p>
        </div>
        <div className={styles.iconDiv}>
          <FontAwesomeIcon icon={icon({name:'node-js', style:'brands'})} size="5x" className={styles.skillIcon}></FontAwesomeIcon>
          <p className={styles.skillName}>NodeJS</p>
        </div>
        <div className={styles.iconDiv}>
          <img src={expressIcon} alt="Express.js icon" className={styles.skillIcon}/>
          <p className={styles.skillName}>Express</p>
        </div>
        <div className={styles.iconDiv}>
          <img src={pugIcon} alt="Pug icon" className={styles.skillIcon}/>
          <p className={styles.skillName}>Pug</p>
        </div>
        <div className={styles.iconDiv}>
          <img src={mongoDBIcon} alt="MongoDB icon" className={styles.skillIcon}/>
          <p className={styles.skillName}>MongoDB</p>
        </div>
        <div className={styles.iconDiv}>
          <img src={jestIcon} alt="Jest icon" className={styles.skillIcon}/>
          <p className={styles.skillName}>Jest</p>
        </div>
        <div className={styles.iconDiv}>
          <FontAwesomeIcon icon={icon({name:'git-alt', style:'brands'})} size="5x" className={styles.skillIcon}></FontAwesomeIcon>
          <p className={styles.skillName}>Git</p>
        </div>
        <div className={styles.iconDiv}>
          <img src={firebaseIcon} alt="Firebase icon" className={styles.skillIcon}/>
          <p className={styles.skillName}>Firebase</p>
        </div>
        <div className={styles.iconDiv}>
          <img src={webpackIcon} alt="Webpack icon" className={styles.skillIcon}/>
          <p className={styles.skillName}>Webpack</p>
        </div>
        <div className={styles.iconDiv}>  
          <FontAwesomeIcon icon={icon({name:'java', style:'brands'})} size="5x" className={styles.skillIcon}></FontAwesomeIcon>
          <p className={styles.skillName}>Java</p>
        </div>
        <div className={styles.iconDiv}>
          <FontAwesomeIcon icon={icon({name:'python', style:'brands'})} size="5x" className={styles.skillIcon}></FontAwesomeIcon>
          <p className={styles.skillName}>Python</p>
        </div>
      </div>
    </div>
  )
};

export default Skills;