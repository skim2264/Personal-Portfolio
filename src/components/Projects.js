import React from "react";
import { myProjects } from "../assets/projectsIndex";
import styles from "../styles/projects.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/project-styles.scss";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


const Projects = () => {

  return (
    <div id="projects" className={styles.projectsDiv}>
      <h1 className={styles.projectHeader}>My Projects</h1>

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{clickable:true}}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {myProjects.map((project) => {
          return (
            <SwiperSlide key={project.title}>
              <div className={styles.card}>
                <div className={styles.imageContent}>
                  <img src={project.img} alt={project.title} className={styles.cardImg}></img>
                </div>

                <div className={styles.cardContent}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.popupLinks}>
                    <a href={project.github} target="_blank" rel="noreferrer" className={styles.popupLink}>Github <FontAwesomeIcon icon={icon({name:"arrow-up-right-from-square"})} /></a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className={styles.popupLink}>Demo <FontAwesomeIcon icon={icon({name:"arrow-up-right-from-square"})} /></a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
};

export default Projects;