import React from 'react';
import { FiUser, FiTarget, FiCode, FiHeart } from 'react-icons/fi';

const About = () => {
  const interests = [
    { icon: <FiCode />, text: 'Frontend Development' },
    { icon: <FiHeart />, text: 'Learning New Thing' },
    { icon: <FiTarget />, text: 'Problem Solving' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate__animated animate__fadeIn">
            <div className="inline-flex items-center space-x-2 mb-4">
              <FiUser className="text-primary-600 dark:text-primary-400" size={24} />
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Get to know me better</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate__animated animate__fadeInUp">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Who am I?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I'm a passionate Computer Science student with a focus on frontend development.
                  I love turning complex problems into simple, beautiful, and intuitive designs.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Career Goals</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  My goal is to become a skilled frontend developer, contributing to meaningful projects
                  while continuously learning and growing in the tech industry.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Tech Interests</h3>
                <div className="space-y-4">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                    >
                      <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                        <span className="text-primary-600 dark:text-primary-400">
                          {interest.icon}
                        </span>
                      </div>
                      <span>{interest.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center shadow-sm">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Projects</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center shadow-sm">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Certifications</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center shadow-sm">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">1+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Years Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;