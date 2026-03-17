import React from 'react';
import { FiExternalLink, FiCode, FiUsers } from 'react-icons/fi';
import { FaGithub, FaHackerrank, FaLinkedin, FaCodepen } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Profiles = () => {
  const codingProfiles = [
    {
      platform: "GitHub",
      icon: <FaGithub />,
      username: "Vishal.",
      url: "https://github.com/vishalx05",
      stats: "50+ repositories",
      color: "hover:bg-gray-900 hover:text-white",
      iconColor: "text-gray-800 dark:text-gray-200"
    },
    {
      platform: "GeeksforGeeks",
      icon: <SiGeeksforgeeks />,
      username: "vishal55xj5",
      url: "https://www.geeksforgeeks.org/profile/vishal55xj5",
      stats: "200+ problems solved",
      color: "hover:bg-green-600 hover:text-white",
      iconColor: "text-green-600"
    },
    {
      platform: "LeetCode",
      icon: <SiLeetcode />,
      username: "vishal",
      url: "https://leetcode.com/u/Vishalx05/",
      stats: "100+ problems solved",
      color: "hover:bg-yellow-600 hover:text-white",
      iconColor: "text-yellow-600"
    },
    {
      platform: "LinkedIn",
      icon: <FaLinkedin />,
      username: "vishal1676",
      url: "https://www.linkedin.com/in/vishal1676/",
      stats: "500+ connections",
      color: "hover:bg-blue-700 hover:text-white",
      iconColor: "text-blue-700"
    }
  ];

  const getStatIcon = (platform) => {
    switch(platform.toLowerCase()) {
      case 'github': return <FiCode />;
      case 'geeksforgeeks': return <FiUsers />;
      case 'leetcode': return <FiUsers />;
      case 'hackerrank': return <FiUsers />;
      default: return <FiUsers />;
    }
  };

  return (
    <section id="profiles" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Coding Profiles</h2>
          <p className="text-gray-600 dark:text-gray-300">Connect with me on these platforms</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {codingProfiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate__animated animate__fadeInUp animate__delay-${index}s ${profile.color}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`text-3xl ${profile.iconColor} group-hover:text-white transition-colors`}>
                  {profile.icon}
                </div>
                <FiExternalLink className="text-gray-400 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                {profile.platform}
              </h3>

              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors mb-4">
                <span>@{profile.username}</span>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 group-hover:text-white transition-colors">
                {getStatIcon(profile.platform)}
                <span>{profile.stats}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profiles;