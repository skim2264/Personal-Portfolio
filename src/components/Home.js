import React, { useEffect, useState } from 'react';
import styles from "../styles/home.module.scss";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="home" className={styles.homeDiv}>
      <div className={`${styles.homeMain} ${scrollPosition > 100 ? styles['blurred'] : ''}`}></div>
      <div className={styles.typewriter}>
        <p>&lt;title&gt;Hi, my name is&lt;title&gt;</p>
        <h1>#Soojin Kim</h1>
        <p className={styles.typingText}>&lt;Full Stack Developer/&gt;</p>
        <div className={styles.line}></div>
      </div>
    </div>
  )
};

export default Home;