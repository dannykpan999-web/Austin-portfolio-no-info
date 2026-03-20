
import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        variant="outline"
        size="icon"
        className={`rounded-full shadow-lg backdrop-blur-md transition-all duration-300 h-12 w-12 ${
          isDark 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-gray-200 border-gray-300'
        }`}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isDark ? 0 : 180 }}
          transition={{ duration: 0.5, type: "spring" }}
          className={isDark ? "text-white" : "text-gray-800"}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default ThemeToggle;
