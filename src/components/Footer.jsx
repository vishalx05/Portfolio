import React from 'react';
import { FiHeart, FiCoffee } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/john-doe', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/john-doe-cs', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/john_doe', label: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://instagram.com/john.doe', label: 'Instagram' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-white mb-2">Vishal .</div>
            <p className="text-gray-400">
              Frontend Developer & CSE Student
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-primary-600 hover:text-white transition-all transform hover:-translate-y-1"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="my-8 border-t border-gray-800"></div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-1 text-gray-400">
            <span>Made with</span>
            <FiHeart className="text-red-500 animate-pulse" fill="currentColor" />
            <span>and</span>
            <FiCoffee className="text-yellow-500" />
            <span>by Vishal</span>
          </div>

          <div className="text-gray-400 text-center">
            <p>© {currentYear} Vishal. All rights reserved.</p>

          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;