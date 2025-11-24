import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Layout } from 'lucide-react';

const AboutSection: React.FC = () => {
  const skills = [
    { name: 'Frontend', icon: <Layout />, description: 'React, TypeScript, HTML/CSS, TailwindCSS, Framer Motion' },
    { name: 'Backend', icon: <Server />, description: 'Node.js, Express, Laravel, PHP' },
    { name: 'Database', icon: <Database />, description: 'MongoDB, MySQL, PostgreSQL' },
    { name: 'Programming', icon: <Code />, description: 'JavaScript, TypeScript, PHP, Python' },
  ];

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 opacity-30 blur"></div>
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Developer at work" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Passionate Developer & Problem Solver
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a Full Stack Web Developer with a passion for building elegant, user-friendly, and high-performing applications. With 3 years of experience in web development, I've worked on a diverse range of projects that have honed my skills across both front-end and back-end technologies.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I thrive on solving complex problems and turning ideas into reality. My mathematical background gives me a strong foundation in logical thinking and problem-solving. I'm constantly learning new technologies and methodologies to stay at the forefront of web development.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Currently Am Studying In M.Sc CA, I'm gaining knowledge of development workflows and best practices. I'm always excited about taking on new challenges and contributing to meaningful projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-2">
                    <div className="text-primary-600 dark:text-primary-400 mr-2">
                      {skill.icon}
                    </div>
                    <h4 className="font-bold">{skill.name}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;