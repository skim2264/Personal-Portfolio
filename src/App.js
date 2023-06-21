import './App.scss';
import React, {useState, useEffect, useRef} from "react";
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Home from './components/Home';
import About from './components/About';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './components/Footer';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function App() {
  //top button appears on scroll
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior:'smooth'
    })
  }

  window.addEventListener('scroll', toggleVisible);

  //background glows behind cursor
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="app-div">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      <div className="scrollTopDiv" style={{display: visible ? 'flex': 'none'}}>
        <button className="scrollTopButton" id="scrollTopButton" onClick={scrollToTop}>
          <FontAwesomeIcon icon={icon({name:'chevron-up'})}/>
        </button>
      </div>
      <div className="glowing-background" ref={containerRef}>
        <div
          className="glowing-circle"
          style={{ top: mousePosition.y, left: mousePosition.x }}
        ></div>
      </div>
    </div>
  );
}

export default App;
