import './App.css';
import Hero from './section/Hero/Hero';
import Nav from './component/nav';
import About from './section/About/About';
import Experience from './section/Experience/Experience';
import Project from './section/Project/Project';
import Contact from './section/Contact/Contact';

function App() {
  return (
    <Nav>
      <div className="App">
        <Hero />
        <About />
        <Experience />
        <Project/>
        <Contact/>
      </div>
    </Nav>

  );
}

export default App;
