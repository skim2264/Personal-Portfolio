import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import styles from "../styles/contact.module.scss";

const Contact = () => {

  return (
    <div id="contact" className={styles.contactDiv}>
      <h1>Contact Me</h1>
      <a href="mailto:soojinkk98@gmail.com" className={styles.contactLink}>
        <FontAwesomeIcon icon={icon({name:"envelope"})} />
        <p>soojinkk98@gmail.com</p>
      </a>
      <a href="https://goo.gl/maps/qLnHmH28aELjkCsf9" className={styles.contactLink} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={icon({name:"house"})} />
        <p>Mississauga, ON</p>
      </a>
      <a href="https://www.linkedin.com/in/soojin-kim1" className={styles.contactLink} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={icon({name:"linkedin", style:'brands'})} />
        <p>LinkedIn</p>
        <FontAwesomeIcon icon={icon({name:"arrow-up-right-from-square"})} />
      </a>
      <a href="https://github.com/skim2264" className={styles.contactLink} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={icon({name:"github", style:'brands'})} />
        <p>Github</p>
        <FontAwesomeIcon icon={icon({name:"arrow-up-right-from-square"})} />
      </a>
      
    </div>
  )
};

export default Contact;