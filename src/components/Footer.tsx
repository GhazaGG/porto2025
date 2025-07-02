import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, Twitter, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: '#',
      label: 'GitHub',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter',
      color: 'hover:text-blue-400'
    },
    {
      icon: Instagram,
      href: '#',
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
    {
      icon: Mail,
      href: 'mailto:hello@ghazagg.dev',
      label: 'Email',
      color: 'hover:text-primary-500'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
                GhazaGG
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Crafting digital experiences with passion and precision. 
              Always learning, always creating.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconComponent className="w-6 h-6" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Back to Top */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              onClick={scrollToTop}
              className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors duration-200 font-medium"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </motion.button>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="my-8 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* Copyright */}
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <span>© {currentYear} GhazaGG. Made with</span>
            <motion.div
              className="mx-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>and lots of ☕</span>
          </div>

          {/* Tech Stack */}
          <div className="flex items-center space-x-4 text-xs text-gray-400 dark:text-gray-500">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <span>Built with</span>
              <div className="flex items-center space-x-1">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded">
                  React
                </span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded">
                  TypeScript
                </span>
                <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded">
                  Tailwind
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Fun Easter Egg */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.p
            className="text-xs text-gray-400 dark:text-gray-500 cursor-pointer select-none"
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              const messages = [
                "🎉 You found the easter egg!",
                "🚀 Thanks for scrolling this far!",
                "💻 Happy coding!",
                "☕ Time for a coffee break?",
                "🌟 You're awesome!"
              ];
              const randomMessage = messages[Math.floor(Math.random() * messages.length)];
              alert(randomMessage);
            }}
          >
            "The best way to predict the future is to create it." - Peter Drucker
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;