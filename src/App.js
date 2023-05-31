import './App.scss';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';

function App() {
  return (
    <div className="app-div">
      <Navbar></Navbar>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
