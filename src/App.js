import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App bg-black min-h-screen text-white">
      <Header />
      <main className="pt-24 md:pt-28 container mx-auto p-6"> {/* Añadimos un relleno superior aquí */}
        <About />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
