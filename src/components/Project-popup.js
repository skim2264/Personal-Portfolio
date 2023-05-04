import React, {useState, useEffect} from "react";
import styles from "../styles/projects.module.scss";

const ProjectPopup = (props) => {
  const {project} = props;

  return (
    <div className={styles.projectPopupDiv}>
      <h3 className={styles.popupTitle}>{project.title}</h3>
      <img src={project.img} alt={project.title} className={styles.popupImg}></img>
      <a href={project.github} className={styles.popupLink}>Github</a>
      <a href={project.demo} className={styles.popupLink}>Demo</a>
      <p>{project.descrip}</p>
    </div>
  )
};

export default ProjectPopup;