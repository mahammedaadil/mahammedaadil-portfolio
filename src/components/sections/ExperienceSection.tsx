import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/experienceData';
import { Briefcase, Calendar, Code } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey as a developer, showcasing the roles and responsibilities I've undertaken.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="relative pl-8 pb-12 last:pb-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-primary-200 dark:bg-primary-800"></div>
              
              {/* Timeline circle */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white dark:bg-gray-700 border-2 border-primary-500 dark:border-primary-500 transform -translate-x-1/2 flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-primary-600 dark:text-primary-400" />
              </div>
              
              {/* Content */}
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-transform hover:scale-[1.02]">
                <div className="flex justify-between items-start mb-2 flex-col sm:flex-row gap-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {experience.position}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {experience.duration}
                  </div>
                </div>
                
                <h4 className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                  {experience.company}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {experience.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300"
                    >
                      <Code className="w-3 h-3 mr-1" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;