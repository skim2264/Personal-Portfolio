import React, {useState, useEffect} from "react";
import ProjectCard from "./Project-Card";
import { myProjects } from "../assets/projectsIndex";
import styles from "../styles/projects.module.scss";

const Projects = () => {

  return (
    <div id="projects" className={styles.projectsDiv}>
      {myProjects.map((project) => {
        return <ProjectCard project={project}></ProjectCard>
      })}
    </div>
  )
};

export default Projects;