import React, {useState, useEffect} from "react";
import ProjectCard from "./Project-Card";
import { myProjects } from "../assets/projectsIndex";
import styles from "../styles/projects.module.scss";

const Projects = () => {

  return (
    <div id="projects" className={styles.projectsDiv}>
      <h1>My Projects</h1>
      <div className={styles.projectCards}>
        {myProjects.map((project) => {
          return <ProjectCard project={project} key={project.title}></ProjectCard>
        })}
      </div>
    </div>
  )
};

export default Projects;