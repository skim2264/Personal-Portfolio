import React, {useState, useEffect} from "react";
import ProjectCard from "./Project-Card";
import { myProjects } from "../assets/projectsIndex";

const Projects = () => {

  return (
    <div id="projects-div">
      {myProjects.map((project) => {
        return <ProjectCard project={project}></ProjectCard>
      })}
    </div>
  )
};

export default Projects;