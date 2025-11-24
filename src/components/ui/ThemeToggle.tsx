import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-colors duration-300"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        {theme === 'light' ? (
          <Sun className="w-6 h-6 text-primary-600" />
        ) : (
          <Moon className="w-6 h-6 text-primary-400" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;