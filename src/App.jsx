import { useState, useEffect, useRef } from 'react';
import Scene3D from './three/Scene3D';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectsRef = useRef(null);
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <nav className="navbar" style={{
        position: 'fixed',
        top: showNav ? 0 : '-100px',
        transition: 'top 0.3s',
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backdropFilter: 'blur(10px)',
        background: 'rgba(0, 0, 0, 0.3)',
      }}>
        <h2>Ali Burkemper</h2>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <Hero />
      <About />
      <Projects/>
      <Contact />

    </div>
  );
}

export default App;