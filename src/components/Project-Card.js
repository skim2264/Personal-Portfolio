import React, {useState, useEffect} from "react";
import ProjectPopup from "./Project-popup";
import styles from "../styles/projects.module.scss";

const ProjectCard = (props) => {
  const {project} = props;

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const toggleTitle = (e) => {
    setHovered(!hovered);
  };

  const displayProject = () => {
    setClicked(true);
  };

  return (
    <div className={styles.projectCardDiv}>
      <img className={hovered ? `${styles.greyout} ${styles.projectImg}` : styles.projectImg} src={project.img} alt={project.title} onMouseEnter={toggleTitle} onMouseLeave={toggleTitle} onClick={displayProject}></img>
      {hovered
        ? <h3 className={styles.projectTitle}>{project.title}</h3>
        : null
      }
      {clicked
        ? <ProjectPopup project={project} setClicked={setClicked}></ProjectPopup>
        : null
      }
    </div>
  )
};

export default ProjectCard;