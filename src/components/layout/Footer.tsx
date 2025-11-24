import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../../data/socialData';
import { Heart } from 'lucide-react';
import SocialLinks from '../sections/SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-10">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
             Mahammedaadil Patel
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Full Stack Web Developer
            </p>
          </motion.div>

          <motion.div 
            className="flex space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SocialLinks />
          </motion.div>

          <motion.div 
            className="text-center text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="flex items-center justify-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Mahammedaadil Patel
            </p>
            <p className="mt-1">
              &copy; {currentYear} All Rights Reserved
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;