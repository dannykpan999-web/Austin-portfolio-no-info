import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, FileText, User, Briefcase, Code2, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { personalInfo } from '@/data/personalInfo';
import BackgroundEffects from './BackgroundEffects';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = personalInfo.title;
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);
    
    return () => clearInterval(typingInterval);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const shapes = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 60 + 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    rotate: Math.random() * 360,
    shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)]
  }));

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Professional background effects */}
      <div className="absolute inset-0 bg-black">
        <BackgroundEffects type="particles" intensity="high" color="#3b82f6" />
        <BackgroundEffects type="grid" intensity="medium" color="#1e40af" />
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className={`absolute ${
              'bg-gray-800/10'
            } backdrop-blur-sm`}
            style={{
              width: shape.size,
              height: shape.size,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              borderRadius: shape.shape === 'circle' ? '50%' : shape.shape === 'square' ? '15%' : '0%',
              clipPath: shape.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              rotate: [0, shape.rotate, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: shape.duration,
              delay: shape.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black/80" />
      
      <div className="container px-4 mx-auto text-center z-10">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-4 sm:mb-6 relative z-10 tracking-tight"
            variants={itemVariants}
          >
            <span className="text-white font-light">{personalInfo.name.first} </span>
            <span className="text-blue-400 font-bold">{personalInfo.name.last}</span>
          </motion.h1>
          
          <motion.div 
            className="min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] lg:min-h-[7rem] my-4 sm:my-6 md:my-8"
            variants={itemVariants}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-body font-medium text-center text-white/95 tracking-wide">
              {typedText}
              <span className="animate-pulse text-blue-400">|</span>
            </h2>
          </motion.div>
          
          
          <motion.div 
            className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-14 md:mb-16"
            variants={itemVariants}
          >
            <motion.a 
              href={`mailto:${personalInfo.contact.email}`} 
              className="p-3 sm:p-4 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={24} className="sm:w-7 sm:h-7 text-white hover:text-blue-400 transition-colors" />
            </motion.a>
            <motion.a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Linkedin size={24} className="sm:w-7 sm:h-7 text-white hover:text-blue-400 transition-colors" />
            </motion.a>
            <motion.a
              href="/resume/resume.pdf"
              download="Austin-Bartlett-Resume.pdf"
              className="p-3 sm:p-4 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileText size={24} className="sm:w-7 sm:h-7 text-white hover:text-blue-400 transition-colors" />
            </motion.a>
          </motion.div>
          
          <motion.button 
            onClick={scrollToNextSection}
            className={`p-3 rounded-full inline-flex items-center justify-center group ${
              isDark ? 'glass' : 'bg-white/80 shadow-md border border-blue-200/50'
            }`}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll down"
          >
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
            >
              <ChevronDown size={24} className={`${
                'text-blue-400 group-hover:text-white'
              } transition-colors`} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
      
      <div className="absolute top-1/3 left-10 w-32 h-32 bg-gray-800/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-gray-700/10 rounded-full blur-3xl animate-float"></div>
    </section>
  );
};

export default Hero;
