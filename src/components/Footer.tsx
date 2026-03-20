
import React from 'react';
import { Github, Linkedin, Mail, MapPin, FileText, Phone, MessageCircle, User, Briefcase, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import { useTheme } from '@/contexts/ThemeContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <footer className={`py-16 relative overflow-hidden ${isDark ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-blue-50 to-blue-100'}`}>
      {/* Professional background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      {/* Top border */}
      <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${isDark ? 'via-gray-600' : 'via-blue-300'} to-transparent`}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Brand section */}
            <motion.div variants={itemVariants} className="md:col-span-1 text-center md:text-left">
              <h3 className={`text-2xl font-display font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>Austin Bartlett</h3>
              <p className={`font-body leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Senior Full-Stack Engineer building scalable, high-performance web and mobile apps, focused on clean architecture and maintainability.
              </p>
              <div className={`flex items-center justify-center md:justify-start gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <MapPin size={16} />
                <span className="font-body text-sm">{personalInfo.contact.location}</span>
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div variants={itemVariants} className="md:col-span-1 text-center md:text-left">
              <h4 className={`text-lg font-display font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>Quick Links</h4>
              <ul className="space-y-3">
                {['About', 'Experience', 'Projects', 'Skills'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className={`transition-colors duration-300 font-body ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Social */}
            <motion.div variants={itemVariants} className="md:col-span-1 text-center md:text-left">
              <h4 className={`text-lg font-display font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>Connect</h4>
              <div className="space-y-3">
                <a 
                  href={`mailto:${personalInfo.contact.email}`}
                  className={`flex items-center justify-center md:justify-start gap-3 transition-colors duration-300 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}
                >
                  <Mail size={16} />
                  <span className="font-body text-sm">{personalInfo.contact.email}</span>
                </a>
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center md:justify-start gap-3 transition-colors duration-300 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}
                >
                  <Linkedin size={16} />
                  <span className="font-body text-sm">LinkedIn</span>
                </a>
                <a
                  href="/resume/resume.pdf"
                  download="Austin-Bartlett-Resume.pdf"
                  className={`flex items-center justify-center md:justify-start gap-3 transition-colors duration-300 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}
                >
                  <FileText size={16} />
                  <span className="font-body text-sm">Download Resume</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom section */}
          <motion.div 
            variants={itemVariants}
            className={`pt-8 border-t ${isDark ? 'border-gray-800' : 'border-blue-200'}`}
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <p className={`font-body text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                © {currentYear} Austin Bartlett. All rights reserved.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
