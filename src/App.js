import './App.scss';
import React, {useState} from "react";
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Home from './components/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function App() {
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
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <div className="scrollTopDiv" style={{display: visible ? 'flex': 'none'}}>
        <button className="scrollTopButton" id="scrollTopButton" onClick={scrollToTop}>
          <FontAwesomeIcon icon={icon({name:'angles-up'})}/>
        </button>
        <p>Top</p>
      </div>
    </div>
  );
}

export default App;
