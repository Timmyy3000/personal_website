
import ScrollAnimation from 'react-animate-on-scroll';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import SkillSet from "./components/SkillSet";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import Experience from './components/Experience';
import Blog from './components/Blog';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';





function App() {
  return (
    <>
      <Router>
        <ScrollUp/>
        <Navbar />

         <Hero />
        <AboutSection />
        <SkillSet />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
        <Footer />

        

      </Router>
     
    
    </>
  );
}

export default App;
