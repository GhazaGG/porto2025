import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, Star, GitFork, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard.',
      image: '🛒',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: '#',
      demo: '#',
      stars: 42,
      forks: 12,
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '📋',
      tags: ['Vue.js', 'Socket.io', 'MongoDB', 'Express'],
      github: '#',
      demo: '#',
      stars: 28,
      forks: 8,
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '🌤️',
      tags: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
      github: '#',
      demo: '#',
      stars: 35,
      forks: 15,
      featured: false,
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'A modern social media application with real-time messaging, photo sharing, and social networking features.',
      image: '📱',
      tags: ['React Native', 'Firebase', 'Redux', 'Expo'],
      github: '#',
      demo: '#',
      stars: 67,
      forks: 23,
      featured: false,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern web technologies, featuring smooth animations and dark mode support.',
      image: '💼',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      github: '#',
      demo: '#',
      stars: 19,
      forks: 5,
      featured: false,
    },
    {
      id: 6,
      title: 'AI Chat Bot',
      description: 'An intelligent chatbot powered by machine learning, capable of natural language processing and contextual responses.',
      image: '🤖',
      tags: ['Python', 'TensorFlow', 'Flask', 'NLP'],
      github: '#',
      demo: '#',
      stars: 89,
      forks: 34,
      featured: true,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  
  const projectEmojis = ['✨', '🚀', '💫', '⭐', '🌟', '💎'];
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">
            <Folder className="inline-block w-8 h-8 mr-3 text-primary-500" />
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my favorite projects that showcase my skills and creativity
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card group hover:shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Project Image/Icon */}
              <div className="relative mb-6">
                <motion.div 
                  className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 rounded-xl flex items-center justify-center text-6xl relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    animate={hoveredProject === project.id ? {
                      rotate: [0, -10, 10, 0],
                      scale: [1, 1.1, 1]
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {project.image}
                  </motion.span>
                  
                  {/* Floating emoji particles on hover */}
                  {hoveredProject === project.id && projectEmojis.map((emoji, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-2xl pointer-events-none"
                      initial={{ 
                        x: Math.random() * 200 - 100,
                        y: Math.random() * 200 - 100,
                        opacity: 0,
                        scale: 0
                      }}
                      animate={{
                        y: -50,
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        rotate: 360
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        ease: "easeOut"
                      }}
                    >
                      {emoji}
                    </motion.div>
                  ))}
                </motion.div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="flex items-center px-2 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-xs">
                    <Star className="w-3 h-3 text-yellow-500 mr-1" />
                    {project.stars}
                  </div>
                  <div className="flex items-center px-2 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-xs">
                    <GitFork className="w-3 h-3 text-gray-500 mr-1" />
                    {project.forks}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.2) + (tagIndex * 0.1) }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <motion.a
                    href={project.github}
                    className="flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-200 relative overflow-hidden group/btn"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"
                    />
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 relative overflow-hidden group/btn"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"
                    />
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="card group hover:shadow-lg relative overflow-hidden"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1, type: "spring" }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  rotateZ: 1,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                      "linear-gradient(45deg, rgba(147, 51, 234, 0.05), rgba(59, 130, 246, 0.05))"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                />
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{project.image}</div>
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.github}
                      className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="p-2 text-gray-400 hover:text-primary-500 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      {project.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="w-3 h-3 mr-1" />
                      {project.forks}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/projects">
            <motion.div
              className="inline-flex items-center px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 font-medium cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Folder className="w-5 h-5 mr-2" />
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;