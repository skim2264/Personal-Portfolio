import React, {useState} from "react";
import styles from "../styles/projects.module.scss";

const ProjectCard = (props) => {
  const {project} = props;

  const [hovered, setHovered] = useState(false);

  const toggleTitle = (e) => {
    setHovered(!hovered);
  };

  return (
    <div className={styles.projectCardDiv}>
      <img className={hovered ? `${styles.greyout} ${styles.projectImg}` : styles.projectImg} src={project.img} alt={project.title} onMouseEnter={toggleTitle} onMouseLeave={toggleTitle}></img>
      {hovered
        ? <h3 className={styles.projectTitle}>{project.title}</h3>
        : null
      }
    </div>
  )
};

export default ProjectCard;