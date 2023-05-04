import React, {useState, useEffect} from "react";

const ProjectPopup = (props) => {
  const {project} = props;

  return (
    <div id="project-popup-div">
      <h3 className="popup-title">{project.title}</h3>
      <img src={project.img} alt={project.title} className="popup-img"></img>
      <a href={project.github} className="popup-link">Github</a>
      <a href={project.demo} className="popup-link">Demo</a>
      <p>{project.descrip}</p>
    </div>
  )
};

export default ProjectPopup;