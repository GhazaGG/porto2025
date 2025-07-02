import React from 'react';
import { motion } from 'framer-motion';

interface BioItem {
  year: string;
  event: string;
}

const Bio: React.FC = () => {
  const bioData: BioItem[] = [
    { year: '1984', event: 'Born in Osaka (大阪), Japan.' },
    { year: '2010', event: 'Completed the Master\'s Program in the Graduate School of Information Science at Nara Institute of Science and Technology (奈良先端科学技術大学院大学情報科学研究科修士課程)' },
    { year: '2010', event: 'Worked at Yahoo! Japan (ヤフー株式会社入社)' },
    { year: '2012 to present', event: 'Working as a freelancer' }
  ];

  const interests: string[] = [
    'Art', 'Music', 'Drawing', 'Playing Drums', 'Photography', 'Leica', 'Machine Learning'
  ];

  return (
    <motion.section 
      className="section bio-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Bio</h2>
      
      <motion.div 
        className="bio-timeline"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {bioData.map((item, index) => (
          <motion.div 
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-event">{item.event}</div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="interests-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="interests-title">I ♥</h3>
        <div className="interests-list">
          {interests.map((interest, index) => (
            <motion.span 
              key={index}
              className="interest-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              viewport={{ once: true }}
            >
              {interest}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Bio;