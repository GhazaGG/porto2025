import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Available for work
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm{' '}
              <span className="text-gradient bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                GhazaGG
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              A passionate{' '}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                Full-Stack Developer
              </span>{' '}
              crafting beautiful and functional digital experiences with modern technologies.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button className="btn btn-primary group">
                <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Get In Touch
              </button>
              <button className="btn btn-secondary group">
                <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                View My Work
              </button>
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors duration-200 relative group"
                aria-label="GitHub"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6" />
                <motion.div
                  className="absolute -inset-2 bg-primary-500/20 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors duration-200 relative group"
                aria-label="LinkedIn"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6" />
                <motion.div
                  className="absolute -inset-2 bg-blue-500/20 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-primary-500 transition-colors duration-200 relative group"
                aria-label="Email"
                whileHover={{ 
                  scale: 1.2, 
                  y: [-2, 2, -2],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-6 h-6" />
                <motion.div
                  className="absolute -inset-2 bg-green-500/20 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main illustration container */}
              <motion.div
                className="w-80 h-80 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-full flex items-center justify-center relative overflow-hidden"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Character illustration */}
                <div className="text-8xl animate-bounce-slow">
                  👨‍💻
                </div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute top-8 right-8 text-2xl"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ⚡
                </motion.div>
                
                <motion.div
                  className="absolute bottom-8 left-8 text-2xl"
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  🚀
                </motion.div>
                
                <motion.div
                  className="absolute top-1/2 left-4 text-xl"
                  animate={{ 
                    x: [0, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  💡
                </motion.div>
                
                <motion.div
                  className="absolute top-1/2 right-4 text-xl"
                  animate={{ 
                    x: [0, 5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  ✨
                </motion.div>
              </motion.div>
              
              {/* Background decorative circles */}
              <motion.div 
                className="absolute -top-4 -left-4 w-16 h-16 bg-primary-300/30 dark:bg-primary-700/30 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-400/20 dark:bg-primary-600/20 rounded-full"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              
              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary-400/40 rounded-full"
                  style={{
                    left: `${10 + (i * 10)}%`,
                    top: `${10 + (i * 8)}%`
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, 15, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 4 + (i * 0.3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-500 transition-colors duration-200"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
};

export default Hero;