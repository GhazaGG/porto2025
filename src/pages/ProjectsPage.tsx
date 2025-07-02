import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Calendar, Tag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
  stars: number;
  forks: number;
  date: string;
  status: 'completed' | 'in-progress' | 'planned';
  category: 'web' | 'mobile' | 'desktop' | 'ai' | 'other';
}

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      longDescription: 'A comprehensive e-commerce platform built with modern technologies. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard. The platform is fully responsive and optimized for performance.',
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'TypeScript'],
      github: 'https://github.com/yourusername/ecommerce-platform',
      demo: 'https://ecommerce-demo.vercel.app',
      stars: 124,
      forks: 32,
      date: '2024-01-15',
      status: 'completed',
      category: 'web'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      longDescription: 'A powerful task management application that enables teams to collaborate effectively. Features include real-time updates using WebSocket, drag-and-drop task organization, team collaboration tools, file attachments, and detailed analytics dashboard.',
      image: '📋',
      tags: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://taskmanager-demo.netlify.app',
      stars: 89,
      forks: 21,
      date: '2023-11-20',
      status: 'completed',
      category: 'web'
    },
    {
      id: 3,
      title: 'Weather Forecast App',
      description: 'Mobile weather app with location-based forecasts',
      longDescription: 'A beautiful and intuitive weather application for mobile devices. Provides accurate weather forecasts, location-based weather data, interactive maps, weather alerts, and detailed meteorological information. Built with React Native for cross-platform compatibility.',
      image: '🌤️',
      tags: ['React Native', 'TypeScript', 'Weather API'],
      github: 'https://github.com/yourusername/weather-app',
      stars: 67,
      forks: 15,
      date: '2023-09-10',
      status: 'completed',
      category: 'mobile'
    },
    {
      id: 4,
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot powered by machine learning',
      longDescription: 'An advanced AI-powered chat assistant that can understand natural language and provide intelligent responses. Features include context awareness, multi-language support, integration with various APIs, and customizable personality traits.',
      image: '🤖',
      tags: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
      github: 'https://github.com/yourusername/ai-chat',
      stars: 156,
      forks: 43,
      date: '2024-02-28',
      status: 'in-progress',
      category: 'ai'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Personal portfolio website with modern design',
      longDescription: 'A modern and responsive portfolio website showcasing my projects and skills. Built with React and TypeScript, featuring smooth animations, dark mode support, and optimized performance.',
      image: '💼',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://yourportfolio.com',
      stars: 45,
      forks: 12,
      date: '2024-03-15',
      status: 'completed',
      category: 'web'
    },
    {
      id: 6,
      title: 'Desktop Music Player',
      description: 'Cross-platform music player with modern UI',
      longDescription: 'A feature-rich desktop music player built with Electron. Supports multiple audio formats, playlist management, equalizer, lyrics display, and music library organization.',
      image: '🎵',
      tags: ['Electron', 'React', 'Node.js', 'SQLite'],
      github: 'https://github.com/yourusername/music-player',
      stars: 78,
      forks: 19,
      date: '2023-12-05',
      status: 'completed',
      category: 'desktop'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', name: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'desktop', name: 'Desktop Apps', count: projects.filter(p => p.category === 'desktop').length },
    { id: 'ai', name: 'AI/ML', count: projects.filter(p => p.category === 'ai').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'planned': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of projects I've worked on, showcasing different technologies and problem-solving approaches.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              layout
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center overflow-hidden">
                <motion.div
                  className="text-6xl"
                  animate={hoveredProject === project.id ? {
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  } : {}}
                  transition={{ duration: 0.6 }}
                >
                  {project.image}
                </motion.div>
                
                {/* Floating particles */}
                {hoveredProject === project.id && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                          left: `${20 + (i * 15)}%`,
                          top: `${20 + (i * 10)}%`
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          y: [0, -20, -40]
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.1,
                          repeat: Infinity
                        }}
                      />
                    ))}
                  </>
                )}
                
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status.replace('-', ' ')}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {project.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="w-4 h-4 mr-1" />
                      {project.forks}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.longDescription}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(project.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      <Tag className="w-3 h-3 inline mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try selecting a different category to see more projects.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;