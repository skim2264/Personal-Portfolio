import './App.scss';
import React, {useState} from "react";
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Home from './components/Home';
import About from './components/About';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './components/Footer';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import 'animate.css';

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

  return (
    <div className="app-div">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      <div className="scrollTopDiv animate__animated animate__pulse animate__infinite animate__slower" style={{display: visible ? 'flex': 'none'}}>
        <button className="scrollTopButton" id="scrollTopButton" onClick={scrollToTop}>
          <FontAwesomeIcon icon={icon({name:'arrow-up'})}/>
          <p>TO TOP</p>
        </button>
      </div>
    </div>
  );
}

export default App;
