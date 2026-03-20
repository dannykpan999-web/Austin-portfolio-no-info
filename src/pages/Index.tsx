
import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import AIChatWidget from '@/components/AIChatWidget';

const Index: React.FC = () => {
  // Adjust scrollbar on mount
  useEffect(() => {
    document.body.classList.add('custom-scrollbar');
    
    return () => {
      document.body.classList.remove('custom-scrollbar');
    };
  }, []);

  // Simple container reference
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <AnimatePresence>
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen bg-black relative overflow-hidden"
        >
          {/* Add background image */}
          <div className="bg-pattern"></div>

          <ParticleBackground />

          {/* Simple background elements */}
          <div className="absolute top-0 left-0 w-full h-screen pointer-events-none">
            <div className="w-full h-full relative">
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black/90"></div>
              <div className="absolute top-0 right-0 w-1/3 h-screen bg-gray-800/5 blur-3xl"></div>
              <div className="absolute top-1/3 left-10 w-1/4 h-1/2 bg-gray-700/10 blur-3xl"></div>
              <div className="absolute top-3/4 right-1/4 w-1/5 h-1/3 bg-gray-600/5 blur-3xl"></div>
            </div>
          </div>

          <Navbar />

          <main className="relative z-10">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
          </main>

          <Footer />
        </motion.div>
      </AnimatePresence>
      {/* Floating widgets outside motion.div so fixed positioning works during scroll */}
      <ThemeToggle />
      <AIChatWidget />
    </>
  );
};

export default Index;
