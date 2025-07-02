import React from 'react';
import { motion } from 'framer-motion';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface Project {
  name: string;
  description: string;
  image: string;
  color: string;
}

const OnTheWeb: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { name: '@craftzdog', url: '#', icon: '🐙' },
    { name: '@inkdrop_app (English)', url: '#', icon: '🐦' },
    { name: '@craftzdog (日本語)', url: '#', icon: '🐦' },
    { name: '@craftzdog', url: '#', icon: '📷' }
  ];

  const projects: Project[] = [
    {
      name: 'Dev as Life',
      description: 'My YouTube channel (~200k subs)',
      image: '🎥',
      color: '#ff0000'
    },
    {
      name: 'Inkdrop',
      description: 'A Markdown note-taking app',
      image: '📝',
      color: '#88ccca'
    }
  ];

  return (
    <motion.section 
      className="section ontheweb-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">On the web</h2>
      
      <motion.div 
        className="social-links"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {socialLinks.map((link, index) => (
          <motion.a 
            key={index}
            href={link.url}
            className="social-link"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            viewport={{ once: true }}
          >
            <span className="social-icon">{link.icon}</span>
            <span className="social-name">{link.name}</span>
          </motion.a>
        ))}
      </motion.div>
      
      <motion.div 
        className="projects-showcase"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              viewport={{ once: true }}
            >
              <div className="project-image" style={{ backgroundColor: project.color }}>
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default OnTheWeb;