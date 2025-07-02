import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface WorkExperience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  companyUrl?: string;
  logo: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
}

const Experience: React.FC = () => {
  const experiences: WorkExperience[] = [
    {
      id: 1,
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      duration: 'Jan 2023 - Present',
      location: 'Jakarta, Indonesia',
      description: 'Led development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers. Improved application performance by 40% through optimization techniques.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL'],
      companyUrl: 'https://techsolutions.com',
      logo: '🏢',
      type: 'full-time'
    },
    {
      id: 2,
      company: 'Digital Innovations',
      position: 'Frontend Developer',
      duration: 'Jun 2021 - Dec 2022',
      location: 'Bandung, Indonesia',
      description: 'Developed responsive web applications using modern frontend frameworks. Collaborated with UX/UI designers to implement pixel-perfect designs. Reduced page load times by 50% through code optimization.',
      technologies: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'Firebase', 'Git'],
      companyUrl: 'https://digitalinnovations.com',
      logo: '💻',
      type: 'full-time'
    },
    {
      id: 3,
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      duration: 'Mar 2020 - May 2021',
      location: 'Remote',
      description: 'Built MVP for fintech startup from scratch. Implemented secure payment processing and user authentication systems. Worked directly with founders to define product requirements and technical architecture.',
      technologies: ['React', 'Express.js', 'MongoDB', 'Stripe API', 'JWT'],
      companyUrl: 'https://startupxyz.com',
      logo: '🚀',
      type: 'contract'
    },
    {
      id: 4,
      company: 'WebDev Agency',
      position: 'Junior Developer',
      duration: 'Aug 2019 - Feb 2020',
      location: 'Surabaya, Indonesia',
      description: 'Developed client websites and e-commerce platforms. Learned modern web development practices and agile methodologies. Contributed to 15+ successful project deliveries.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress'],
      companyUrl: 'https://webdevagency.com',
      logo: '🌐',
      type: 'internship'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'part-time': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'contract': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      case 'internship': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50/50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">
            <Briefcase className="inline-block w-8 h-8 mr-3 text-primary-500" />
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and the experiences that shaped my career
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-400 to-primary-600"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                whileHover={{ scale: 1.2 }}
              />

              {/* Experience Card */}
              <motion.div
                className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group">
                  {/* Company Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center text-2xl mr-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {experience.logo}
                      </motion.div>
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {experience.company}
                          </h3>
                          {experience.companyUrl && (
                            <motion.a
                              href={experience.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-2 text-gray-400 hover:text-primary-500 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </motion.a>
                          )}
                        </div>
                        <p className="text-primary-600 dark:text-primary-400 font-semibold">
                          {experience.position}
                        </p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(experience.type)}`}>
                      {experience.type.replace('-', ' ')}
                    </span>
                  </div>

                  {/* Duration and Location */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {experience.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Career Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { label: 'Years Experience', value: '4+', icon: '📅' },
            { label: 'Projects Completed', value: '50+', icon: '🚀' },
            { label: 'Technologies Mastered', value: '15+', icon: '⚡' },
            { label: 'Happy Clients', value: '30+', icon: '😊' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;