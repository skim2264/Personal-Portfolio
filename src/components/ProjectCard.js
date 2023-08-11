import React from "react";
import styles from "../styles/projects.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import expressIcon from "../assets/express.svg";
import pugIcon from "../assets/pugjs.svg";
import mongoDBIcon from "../assets/mongodb.svg";
import firebaseIcon from "../assets/firebase.svg";
import webpackIcon from "../assets/webpack.svg";
import jestIcon from "../assets/jest.svg";
import typescriptIcon from "../assets/typescript.svg";

const displayIcon = (iconName) => {
  if (iconName === "javascript") {
    return <FontAwesomeIcon icon={icon({name:'js', style:'brands'})} size="5x" className={styles.skillIcon}/>
  } else if (iconName === "typescript") {
    return <img src={typescriptIcon} alt="Typescript icon" className={styles.skillIcon}/>
  } else if (iconName === "html") {
    return <FontAwesomeIcon icon={icon({name:'html5', style:'brands'})} size="5x" className={styles.skillIcon}/>
  } else if (iconName === "css") {
    return <FontAwesomeIcon icon={icon({name:'css3-alt', style:'brands'})} size="5x" className={styles.skillIcon}/>
  } else if (iconName === "sass") {
    return <FontAwesomeIcon icon={icon({name:'sass', style:'brands'})} size="5x" className={styles.skillIcon}/>
  } else if (iconName === "react") {
    return <FontAwesomeIcon icon={icon({name:'react', style:'brands'})} size="5x" className={styles.skillIcon}/>
  } else if (iconName === "nodejs") {
    return <FontAwesomeIcon icon={icon({name:'node-js', style:'brands'})} size="5x" className={styles.skillIcon}/>
  } else if (iconName === "expressjs") {
    return <img src={expressIcon} alt="Express.js icon" className={styles.skillIcon}/>
  } else if (iconName === "mongodb") {
    return <img src={mongoDBIcon} alt="MongoDB icon" className={styles.skillIcon}/>
  } else if (iconName === "git") {
    return <FontAwesomeIcon icon={icon({name:'git-alt', style:'brands'})} size="5x" className={styles.skillIcon}/>
  } else if (iconName === "firebase") {
    return <img src={firebaseIcon} alt="Firebase icon" className={styles.skillIcon}/>
  } else if (iconName === "webpack") {
    return <img src={webpackIcon} alt="Webpack icon" className={styles.skillIcon}/>
  } else if (iconName === "jest") {
    return <img src={jestIcon} alt="Jest icon" className={styles.skillIcon}/>
  } else if (iconName === "pug") {
    return <img src={pugIcon} alt="Pug icon" className={styles.skillIcon}/>
  }
}


const ProjectCard = (props) => {
  const {title, github, demo, description, skills} = props;
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p>{description}</p>
        <div className={styles.skillIcons}>
          {skills.map((skill) => {
          return <p>{displayIcon(skill)}</p>
        })}
        </div>
        <div className={styles.popupLinks}>
          <a href={github} target="_blank" rel="noreferrer" className={styles.popupLink}>Github</a>
          <a href={demo} target="_blank" rel="noreferrer" className={styles.popupLink}>Demo</a>
        </div>
      </div>
    </div>
  )
};

export default ProjectCard;