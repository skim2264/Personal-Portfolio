import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import styles from "../styles/contact.module.scss";

const Contact = () => {

  useEffect(() => { 
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const links = document.querySelectorAll(`.${styles.contactLink}`);

      links.forEach(link => {
        const linkPosition = link.offsetTop;
        if (linkPosition < scrollPosition) {
          link.classList.add(styles.animate);
        }
      })
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div id="contact" className={styles.contactDiv}>
      <h1>Contact Me</h1>
      <div className={styles.contactLinks}>
        <a href="mailto:soojinkk98@gmail.com" className={styles.contactLink}>
          <FontAwesomeIcon icon={icon({name:"envelope"})} className={styles.contactIcon}/>
          <p>soojinkk98@gmail.com</p>
        </a>
        <a href="https://www.linkedin.com/in/soojin-kim1" className={styles.contactLink} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={icon({name:"linkedin", style:'brands'})} className={styles.contactIcon}/>
          <p>LinkedIn</p>

        </a>
        <a href="https://github.com/skim2264" className={styles.contactLink} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={icon({name:"github", style:'brands'})} className={styles.contactIcon}/>
          <p>Github</p>

        </a>
        <a href="https://flowcv.com/resume/9j5rnwqsng" className={styles.contactLink} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={icon({name:"file"})} className={styles.contactIcon}/>
          <p>Resume</p>

        </a>
      </div>
      
      
    </div>
  )
};

export default Contact;