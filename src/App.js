import React from 'react';
import Header from './components/Header.jsx';
import Introduction from './components/Introduction.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
      <Header />
      <main>
      <div className="overlapping-sections"></div>
        <Introduction />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-dark text-white text-center py-4">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
    </ParallaxProvider>
  
  );
}

export default App;