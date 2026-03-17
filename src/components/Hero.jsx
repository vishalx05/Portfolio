import React from 'react';
import { FiDownload, FiExternalLink, FiChevronDown } from 'react-icons/fi';

const Hero = () => {
  const resumeUrl = '/resume.pdf';

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary-500 dark:border-primary-600 animate__animated animate__zoomIn">
          <img
            src="https://via.placeholder.com/128"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeIn">
          Vishal <span className="text-primary-600 dark:text-primary-400">.</span>
        </h1>

        <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full animate__animated animate__fadeInUp">
          <span className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Frontend Developer & CSE Student
          </span>
        </div>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 animate__animated animate__fadeInUp animate__delay-1s">
          Passionate about creating beautiful, functional web applications.
          Currently pursuing Computer Science while building real-world projects.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate__animated animate__fadeInUp animate__delay-2s">
          <button
            onClick={() => scrollToSection('#projects')}
            className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
          >
            <span>View Projects</span>
            <FiExternalLink />
          </button>

          <a
            href={resumeUrl}
            download="John_Doe_Resume.pdf"
            className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors flex items-center justify-center space-x-2"
          >
            <FiDownload />
            <span>Download Resume</span>
          </a>
        </div>

        <button
          onClick={() => scrollToSection('#education')}
          className="animate-bounce text-gray-400 hover:text-primary-600 transition-colors"
          aria-label="Scroll down"
        >
          <FiChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;