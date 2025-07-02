import React from 'react';
import { motion } from 'framer-motion';

const Work: React.FC = () => {
  return (
    <motion.section 
      className="section work-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Work</h2>
      
      <motion.div 
        className="work-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="work-description">
          Takuya is a freelance and a full-stack developer based in Osaka 
          with a passion for building digital services/stuff he wants. He has a 
          knack for all things launching products, from planning and designing 
          all the way to solving real-life problems with code. When not online, 
          he loves hanging out with his camera. Currently, he is living off 
          of his own product called{' '}
          <motion.a 
            href="#inkdrop" 
            className="link-highlight"
            whileHover={{ scale: 1.05 }}
          >
            Inkdrop
          </motion.a>
          . He publishes content for marketing 
          his products and his YouTube channel called{' '}
          <motion.a 
            href="#devaslife" 
            className="link-highlight"
            whileHover={{ scale: 1.05 }}
          >
            "Dev as Life"
          </motion.a>{' '}
          has more than 100k subscribers.
        </p>
        
        <motion.div 
          className="portfolio-button-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="#portfolio" 
            className="btn btn-primary portfolio-btn"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(136, 204, 202, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="btn-icon">📁</span>
            My portfolio
            <span className="btn-arrow">→</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Work;