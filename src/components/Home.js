import React, { useState, useEffect, useRef } from 'react';
import styles from "../styles/home.module.scss";
import NET from "vanta/dist/vanta.net.min";
import 'animate.css';

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: '#6e6d6d',
        backgroundColor: 'rgba(245, 245, 245, 1)',
        points: 5.00,
        maxDistance: 25.00,
        spacing: 18.00,
        showDots: false
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect]);

  return (
    <div id="home" className={styles.homeDiv} ref={myRef}>
      <div className={styles.homeMain}></div>
      <div className={styles.typewriter}>
        <div className={styles.nameDiv}>
          <h1 className="animate__animated animate__fadeInLeftBig">Hello.</h1>
          <p className={styles.typingText}>My name is Soojin Kim</p>
        </div>
        <p className="animate__animated animate__fadeInLeft animate__delay-3s">I am a <span>&lt;Full Stack Developer/ &gt;</span> with a passion to create new things. Welcome to my portfolio, let's create something remarkable together.</p>
        <div className={styles.line}></div>
      </div>
    </div>
  )
};

export default Home;