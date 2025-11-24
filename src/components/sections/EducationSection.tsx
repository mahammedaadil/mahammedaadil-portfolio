import React from 'react';
import { motion } from 'framer-motion';
import { educations } from '../../data/educationData';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="section-title">Education</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey has equipped me with both technical knowledge and strong analytical thinking skills.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {educations.map((education, index) => (
            <motion.div
              key={education.id}
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
                <GraduationCap className="w-3 h-3 text-primary-600 dark:text-primary-400" />
              </div>
              
              {/* Content */}
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-transform hover:scale-[1.02]">
                <div className="flex justify-between items-start mb-2 flex-col sm:flex-row gap-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {education.degree}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {education.duration}
                  </div>
                </div>
                
                <h4 className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                  {education.institution}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {education.details}
                </p>
                
                {education.cgpa && (
                  <div className="flex items-center mt-3">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">CGPA:</span>
                    <span className="ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300">
                      {education.cgpa}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;