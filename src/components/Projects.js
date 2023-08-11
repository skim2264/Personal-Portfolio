import React, {useState, useEffect} from "react";
import { myProjects } from "../assets/projectsIndex";
import styles from "../styles/projects.module.scss";
import ProjectCard from "./ProjectCard";


const Projects = () => {
  const [display, setDisplay] = useState(myProjects[0]);
  const [active, setActive] = useState(myProjects[0].title);

  const setProjectDisplay = (project) => {
    setDisplay(project);
    document.getElementById(active).classList.remove("activeTab");
    const el = document.getElementById(project.title);
    setActive(project.title);
    el.classList.add("activeTab");
  };

  useEffect(() => {
    document.getElementById(active).classList.add("activeTab");
  },[active]);

  return (
    <div id="projects" className={styles.projectsDiv}>
      <h1 className={styles.projectHeader}>My Projects</h1>
      <div className={styles.projectsDivContainer}>
        <div className={styles.projectsMenu}>
          {myProjects.map((project) => {
            return <p onClick={() => setProjectDisplay(project)} key={project.title} id={project.title}>{project.title}</p>
          })}
        </div>
        <ProjectCard key={display.title} title={display.title} github={display.github} demo={display.demo} description={display.description} skills={display.skills}/>
      </div>
      
    </div>
  )
};

export default Projects;