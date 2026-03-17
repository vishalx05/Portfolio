import React from 'react';
import { FiExternalLink, FiGithub, FiStar, FiEye } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A responsive dashboard for e-commerce analytics with real-time data visualization",
      tech: ['React', 'Chart.js', 'Tailwind CSS', 'Firebase'],
      github: "https://github.com/username/ecommerce-dashboard",
      demo: "https://ecommerce-demo.netlify.app",
      featured: true
    },
    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts and beautiful UI",
      tech: ['React', 'OpenWeather API', 'Axios'],
      github: "https://github.com/username/weather-app",
      demo: "https://weather-demo.netlify.app",
      featured: false
    },
    {
      title: "Task Manager",
      description: "Full-featured task management application with drag & drop functionality",
      tech: ['React', 'LocalStorage', 'React DnD'],
      github: "https://github.com/username/task-manager",
      demo: "https://taskmanager-demo.netlify.app",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "This portfolio website built with React and Tailwind CSS",
      tech: ['React', 'Tailwind CSS', 'Animate.css'],
      github: "https://github.com/username/portfolio",
      demo: "#",
      featured: false
    }
  ];

  const getTechIcon = (tech) => {
    switch(tech.toLowerCase()) {
      case 'react': return <FaReact className="text-blue-400" />;
      case 'node.js': return <FaNodeJs className="text-green-500" />;
      case 'python': return <FaPython className="text-yellow-500" />;
      default: return null;
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-300">Things I've built</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate__animated animate__fadeInUp animate__delay-${index + 1}s ${project.featured ? 'md:col-span-2' : ''}`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {project.featured && (
                      <FiStar className="text-yellow-500" fill="currentColor" />
                    )}
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        title="Live Demo"
                      >
                        <FiEye />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                      title="View on GitHub"
                    >
                      <FiGithub />
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center space-x-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                    >
                      {getTechIcon(tech)}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <FiGithub />
                    <span>Code</span>
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border-2 border-gray-900 dark:border-gray-300 text-gray-900 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <FiExternalLink />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;