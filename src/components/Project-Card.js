import React, {useState, useEffect} from "react";
import ProjectPopup from "./Project-popup";

const ProjectCard = (props) => {
  const {project} = props;

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const toggleTitle = (e) => {
    e.target.classList.toggle("greyout");
    setHovered(!hovered);
  };

  const displayProject = () => {
    setClicked(true);
  };

  return (
    <div className="projectcard-div">
      <img className="project-img" src={project.img} alt={project.title} onMouseEnter={toggleTitle} onMouseLeave={toggleTitle} onClick={displayProject}></img>
      {hovered
        ? <h3 className="project-title">{project.title}</h3>
        : null
      }
      {clicked
        ? <ProjectPopup project={project}></ProjectPopup>
        : null
      }
    </div>
  )
};

export default ProjectCard;