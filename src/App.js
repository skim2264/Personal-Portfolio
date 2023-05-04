import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="app-div">
      <Navbar></Navbar>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
