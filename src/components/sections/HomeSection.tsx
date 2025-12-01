import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown, Download } from 'lucide-react';
import SocialLinks from './SocialLinks';

const HomeSection: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="container-custom py-20">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="w-full lg:w-3/5">
            <motion.p 
              className="text-primary-600 dark:text-primary-400 font-medium mb-4"
              variants={item}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
              variants={item}
            >
              Mahammedaadil Patel
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300"
              variants={item}
            >
              Full Stack Web Developer
            </motion.h2>
            <motion.p 
              className="text-gray-600 dark:text-gray-400 max-w-xl mb-8 text-lg"
              variants={item}
            >
              Passionate web developer with building modern, responsive applications using React, Node.js, MongoDB, Express, MySQL.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              variants={item}
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <motion.button 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
              </Link>
              <motion.a 
                href="/resume.pdf" 
                target="_blank"
                className="btn btn-outline text-gray-800 dark:text-gray-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div variants={item}>
              <SocialLinks />
            </motion.div>


          </div>

          <motion.div
            className="w-full lg:w-2/5 relative"
            variants={item}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-primary-600/20 dark:bg-primary-500/10 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
              <img
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Mahammedaadil Patel"
                className="relative z-10 w-full max-w-sm mx-auto rounded-2xl shadow-xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="flex flex-col items-center cursor-pointer">
              <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll Down</span>
              <ArrowDown className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;