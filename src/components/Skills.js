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

const Skills = () => {

  return (
    <div id="skills" className={styles.skillsContainerDiv}>
      <div>
        <h1>Skills</h1>
      </div>
      <div className={styles.skillsDiv}>
        <div className={styles.skillSection}>
          <h2 className={styles.skillHeader}>Front-End</h2>
          <div className="iconDiv">
            <FontAwesomeIcon icon={icon({name:'js', style:'brands'})}></FontAwesomeIcon>
            <p>Javascript</p>
          </div>
          <div className="iconDiv">
            <FontAwesomeIcon icon={icon({name:'html5', style:'brands'})}></FontAwesomeIcon>
            <p>HTML</p>
          </div>
          <div className="iconDiv">
            <FontAwesomeIcon icon={icon({name:'css3-alt', style:'brands'})}></FontAwesomeIcon>
            <p>CSS</p>
          </div>
          <div className="iconDiv">
            <FontAwesomeIcon icon={icon({name:'react', style:'brands'})}></FontAwesomeIcon>
            <p>React</p>
          </div>
        </div>
        <div className={styles.skillSection}>
          <h2 className={styles.skillHeader}>Back-End</h2>
          <div className="iconDiv">
            <FontAwesomeIcon icon={icon({name:'node-js', style:'brands'})}></FontAwesomeIcon>
            <p>NodeJS</p>
          </div>
          <div className="iconDiv">
            <img src={expressIcon} alt="Express.js icon" className={styles.skillIcon}/>
            <p>Express</p>
          </div>
          <div className="iconDiv">
            <FontAwesomeIcon icon={icon({name:'js', style:'brands'})}></FontAwesomeIcon>
            <p>Javascript</p>
          </div>
          <div className="iconDiv">
            <img src={pugIcon} alt="Pug icon" className={styles.skillIcon}/>
            <p>Pug</p>
          </div>
          <div className="iconDiv">
            <img src={mongoDBIcon} alt="MongoDB icon" className={styles.skillIcon}/>
            <p>MongoDB</p>
          </div>
          <div className="iconDiv">
            <img src={jestIcon} alt="Jest icon" className={styles.skillIcon}/>
            <p>Jest</p>
          </div>
        </div>
        <div className={styles.skillSection}>
          <h2 className={styles.skillHeader}>Miscellaneous</h2>
          <div className="iconDiv">
            <FontAwesomeIcon icon={icon({name:'git-alt', style:'brands'})}></FontAwesomeIcon>
            <p>Git</p>
          </div>
          <div className="iconDiv">
            <img src={firebaseIcon} alt="Firebase icon" className={styles.skillIcon}/>
            <p>Firebase</p>
          </div>
          <div className="iconDiv">
            <img src={webpackIcon} alt="Webpack icon" className={styles.skillIcon}/>
            <p>Webpack</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Skills;