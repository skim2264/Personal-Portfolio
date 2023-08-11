import React from "react";
import { myProjects } from "../assets/projectsIndex";
import styles from "../styles/projects.module.scss";
import ProjectCard from "./ProjectCard";


const Projects = () => {

  return (
    <div id="projects" className={styles.projectsDiv}>
      <h1 className={styles.projectHeader}>My Projects</h1>
      {myProjects.map((project) => {
        return (
            <ProjectCard key={project.title} title={project.title} github={project.github} demo={project.demo} description={project.description} skills={project.skills}/>
        )
      })}
    </div>
  )
};

export default Projects;