import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../../data/socialData';
import { 
  Github, 
  Linkedin, 
  Code, 
  Code2 
} from 'lucide-react';

const SocialLinks: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github className="w-5 h-5" />;
      case 'Linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'Code':
        return <Code className="w-5 h-5" />;
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={link.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          {getIcon(link.icon)}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;