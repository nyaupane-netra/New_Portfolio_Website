import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 text-center">
        <div className="section-container">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Netra Nyaupane. Built with React, Tailwind, and Gemini AI.
          </p>
        </div>
      </footer>
    </div>
  );
}
