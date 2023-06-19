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
        <div className={styles.skillSection}>
          <h2 className={styles.skillHeader}>Front-End</h2>
          <div className={styles.iconDiv}>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={icon({name:'js', style:'brands'})}></FontAwesomeIcon>|
              <img src={typescriptIcon} alt="Typescript icon" className={styles.skillIcon}/>
            </div>
            <p>Javascript | Typescript</p>
          </div>
          <div className={styles.iconDiv}>
            <FontAwesomeIcon icon={icon({name:'html5', style:'brands'})}></FontAwesomeIcon>
            <p>HTML</p>
          </div>
          <div className={styles.iconDiv}>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={icon({name:'css3-alt', style:'brands'})}></FontAwesomeIcon>|
              <FontAwesomeIcon icon={icon({name:'sass', style:'brands'})}></FontAwesomeIcon>
            </div>
            <p>CSS | Sass</p>
          </div>
          <div className={styles.iconDiv}>
            <FontAwesomeIcon icon={icon({name:'react', style:'brands'})}></FontAwesomeIcon>
            <p>React</p>
          </div>
        </div>
        <div className={styles.skillSection}>
          <h2 className={styles.skillHeader}>Back-End</h2>
          <div className={styles.iconDiv}>
            <FontAwesomeIcon icon={icon({name:'node-js', style:'brands'})}></FontAwesomeIcon>
            <p>NodeJS</p>
          </div>
          <div className={styles.iconDiv}>
            <img src={expressIcon} alt="Express.js icon" className={styles.skillIcon}/>
            <p>Express</p>
          </div>
          <div className={styles.iconDiv}>
            <img src={pugIcon} alt="Pug icon" className={styles.skillIcon}/>
            <p>Pug</p>
          </div>
          <div className={styles.iconDiv}>
            <img src={mongoDBIcon} alt="MongoDB icon" className={styles.skillIcon}/>
            <p>MongoDB</p>
          </div>
          <div className={styles.iconDiv}>
            <img src={jestIcon} alt="Jest icon" className={styles.skillIcon}/>
            <p>Jest</p>
          </div>
        </div>
        <div className={styles.skillSection}>
          <h2 className={styles.skillHeader}>Miscellaneous</h2>
          <div className={styles.iconDiv}>
            <FontAwesomeIcon icon={icon({name:'git-alt', style:'brands'})}></FontAwesomeIcon>
            <p>Git</p>
          </div>
          <div className={styles.iconDiv}>
            <img src={firebaseIcon} alt="Firebase icon" className={styles.skillIcon}/>
            <p>Firebase</p>
          </div>
          <div className={styles.iconDiv}>
            <img src={webpackIcon} alt="Webpack icon" className={styles.skillIcon}/>
            <p>Webpack</p>
          </div>
          <div className={styles.iconDiv}>  
            <FontAwesomeIcon icon={icon({name:'java', style:'brands'})}></FontAwesomeIcon>
          <p>Java</p>
          <div className={styles.iconDiv}>
            <FontAwesomeIcon icon={icon({name:'python', style:'brands'})}></FontAwesomeIcon>
            <p>Python</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
};

export default Skills;