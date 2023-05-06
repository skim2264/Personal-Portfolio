import React from "react";
import styles from "../styles/projects.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const ProjectPopup = (props) => {
  const {project, setClicked} = props;

  const closePopup = () => {
    setClicked(false);
  }

  return (
    <div className={styles.projectPopupDiv}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.popupTitle}>{project.title}</h3>
          <span className={styles.close} onClick={closePopup}>&times;</span>
        </div>
        <div className={styles.popupMain}>
          <img src={project.img} alt={project.title} className={styles.popupImg}></img>
          <div className={styles.links}>
            <a href={project.github} className={styles.popupLink}>Github <FontAwesomeIcon icon={icon({name:"arrow-up-right-from-square"})} /></a>
            <a href={project.demo} className={styles.popupLink}>Demo <FontAwesomeIcon icon={icon({name:"arrow-up-right-from-square"})} /></a>
          </div>
        </div>
        
        <p>{project.descrip}</p>
      </div>
    </div>
  )
};

export default ProjectPopup;