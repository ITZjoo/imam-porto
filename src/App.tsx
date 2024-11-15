import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen space-bg text-white">
      <div className="fixed inset-0 bg-blue-500/10 backdrop-blur-[1px]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;