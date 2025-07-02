import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Coffee, Code2, Gamepad2, Music } from 'lucide-react';

const About: React.FC = () => {
  const interests = [
    { icon: Code2, label: 'Coding', color: 'text-blue-500' },
    { icon: Coffee, label: 'Coffee', color: 'text-amber-600' },
    { icon: Gamepad2, label: 'Gaming', color: 'text-purple-500' },
    { icon: Music, label: 'Music', color: 'text-green-500' },
  ];

  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">
            <User className="inline-block w-8 h-8 mr-3 text-primary-500" />
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Illustration */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="w-72 h-72 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-2xl flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Character illustration */}
                <div className="text-7xl">
                  🧑‍🎨
                </div>
                
                {/* Floating hearts */}
                <motion.div
                  className="absolute top-6 right-6 text-red-400"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Heart className="w-6 h-6 fill-current" />
                </motion.div>
                
                <motion.div
                  className="absolute bottom-6 left-6 text-primary-400"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  ✨
                </motion.div>
              </motion.div>
              
              {/* Background decorations */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-primary-300/30 dark:bg-primary-700/30 rounded-lg animate-pulse" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-primary-400/20 dark:bg-primary-600/20 rounded-lg animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Hello! I'm GhazaGG 👋
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm a passionate full-stack developer with a love for creating beautiful, 
                functional, and user-friendly applications. I enjoy working with modern 
                technologies and am always eager to learn new things.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                When I'm not coding, you can find me exploring new technologies, 
                playing games, or enjoying a good cup of coffee while listening to music.
              </p>
              
              {/* Interests */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  Things I Love
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest, index) => {
                    const IconComponent = interest.icon;
                    return (
                      <motion.div
                        key={interest.label}
                        className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors duration-200"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <IconComponent className={`w-5 h-5 ${interest.color}`} />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {interest.label}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;