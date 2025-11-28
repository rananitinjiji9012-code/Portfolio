import React from 'react';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';

function App() {
  return (
    <div className="bg-gray-950 min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
