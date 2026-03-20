
import React, { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, Code2, Award, Mail, Home } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div 
          className="font-bold text-xl cursor-pointer" 
          onClick={() => scrollToSection('hero')}
        >
          <span className="text-blue-400 font-display">Austin Bartlett</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-2">
            <li><button className="nav-link" onClick={() => scrollToSection('about')}>About</button></li>
            <li><button className="nav-link" onClick={() => scrollToSection('experience')}>Experience</button></li>
            <li><button className="nav-link" onClick={() => scrollToSection('skills')}>Skills</button></li>
            <li><button className="nav-link" onClick={() => scrollToSection('projects')}>Projects</button></li>
            {/* <li><button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button></li> */}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 focus:outline-none ${isDark ? 'text-white' : 'text-gray-800'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 p-4">
          <nav>
            <ul className="flex flex-col space-y-4">
              <li><button className="nav-link" onClick={() => scrollToSection('about')}>About</button></li>
              <li><button className="nav-link" onClick={() => scrollToSection('experience')}>Experience</button></li>
              <li><button className="nav-link" onClick={() => scrollToSection('skills')}>Skills</button></li>
              <li><button className="nav-link" onClick={() => scrollToSection('projects')}>Projects</button></li>
              <li><button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
