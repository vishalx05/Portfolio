import React from 'react';
import { FiCalendar, FiMapPin, FiBook } from 'react-icons/fi';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      college: "Amritsar Group of College, Amritsar",
      year: "2024 - Pursing",
      stream: "Computer Science & Engineering",
      location: "Punjab, India"
    },
    {
      degree: "Diploma",
      college: "Goverment Polytechnic College",
      year: "2021 - 2024",
      stream: "Computer Science and Engineering",
      gpa: "82.7%",
      location: "Punjab, India"
    },
    {
      degree: "Secondary (10th)",
      college: "Lawrence High School, Amritsar",
      year: "2020 - 2021",
      gpa: "93.8%",
      location: "Punjab, India"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <div className="inline-flex items-center space-x-2 mb-4">
            <FiBook className="text-primary-600 dark:text-primary-400" size={24} />
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300">My academic journey</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row mb-12 animate__animated animate__fadeInUp animate__delay-${index}s`}
            >
              <div className="md:w-1/3 flex md:justify-end pr-8 relative">
                <div className="hidden md:block absolute right-0 top-0 h-full w-px bg-gray-300 dark:bg-gray-700">
                  <div className="absolute right-0 top-6 w-3 h-3 bg-primary-600 dark:bg-primary-400 rounded-full transform translate-x-1/2"></div>
                </div>
                <div className="md:text-right mb-4 md:mb-0">
                  <div className="inline-flex items-center space-x-1 text-primary-600 dark:text-primary-400 mb-2">
                    <FiCalendar size={16} />
                    <span className="font-semibold">{edu.year}</span>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                      <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 mb-1">
                        <FiMapPin size={16} />
                        <span>{edu.college}</span>
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">{edu.location}</div>
                    </div>
                    <div className="mt-2 sm:mt-0 flex items-center space-x-1 text-primary-600 dark:text-primary-400">
                      <span className="font-semibold">{edu.gpa}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm">
                      {edu.stream}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;