
import './App.css';
import Header from './components/Header/Header.js'
import Skills from './components/Skills/Skills.js'
import Contact from './components/Contact.js'
import About from './components/About.js'
import Nav from './components/Nav.js'
import Projects from './components/Project/Projects.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
