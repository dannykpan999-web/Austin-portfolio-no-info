
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`py-6 relative overflow-hidden ${isDark ? 'bg-black' : 'bg-blue-100'}`}>
      <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent ${isDark ? 'via-gray-600' : 'via-blue-300'} to-transparent`}></div>
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <p className={`font-body text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            © {currentYear} Austin Bartlett. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
