import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNpm,
  FaBootstrap,
  FaSass
} from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiNextdotjs, SiExpress, SiMongodb, SiFirebase } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      description: "Technologies I use to build user interfaces",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "text-orange-500", bgColor: "bg-orange-500" },
        { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "text-blue-500", bgColor: "bg-blue-500" },
        { name: "JavaScript", icon: <FaJs />, level: 88, color: "text-yellow-500", bgColor: "bg-yellow-500" },
        { name: "React.js", icon: <FaReact />, level: 85, color: "text-cyan-400", bgColor: "bg-cyan-400" },
        { name: "Redux", icon: <SiRedux />, level: 78, color: "text-purple-500", bgColor: "bg-purple-500" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 92, color: "text-teal-400", bgColor: "bg-teal-400" },
        { name: "Bootstrap", icon: <FaBootstrap />, level: 85, color: "text-purple-600", bgColor: "bg-purple-600" },
      ]
    },
    {
      category: "Backend & Database",
      description: "Server-side technologies and databases",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 52, color: "text-green-500", bgColor: "bg-green-500" },
        { name: "Express.js", icon: <SiExpress />, level: 80, color: "text-gray-600 dark:text-gray-300", bgColor: "bg-gray-600" },
        { name: "MongoDB", icon: <SiMongodb />, level: 75, color: "text-green-600", bgColor: "bg-green-600" },
        { name: "Firebase", icon: <SiFirebase />, level: 60, color: "text-yellow-500", bgColor: "bg-yellow-500" },
        { name: "REST APIs", icon: <FaNodeJs />, level: 85, color: "text-blue-600", bgColor: "bg-blue-600" },
      ]
    },
    {
      category: "Tools & Platforms",
      description: "Development tools and platforms I use daily",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 88, color: "text-orange-600", bgColor: "bg-orange-600" },
        { name: "GitHub", icon: <FaGithub />, level: 90, color: "text-gray-800 dark:text-gray-200", bgColor: "bg-gray-800 dark:bg-gray-200" },
        { name: "VS Code", icon: <TbBrandVscode />, level: 95, color: "text-blue-500", bgColor: "bg-blue-500" },
        { name: "NPM", icon: <FaNpm />, level: 70, color: "text-red-500", bgColor: "bg-red-500" },
      ]
    }
  ];

  const SkillProgressBar = ({ level, bgColor }) => (
    <div className="relative h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full ${bgColor} transition-all duration-1000 ease-out`}
        style={{ width: `${level}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 -z-10"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
            <span className="text-2xl font-bold text-white">💻</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I'm proficient with, constantly updated with the latest trends
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="group relative"
              style={{ animationDelay: `${catIndex * 200}ms` }}
            >
              {/* Card Container */}
              <div className="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-[1.02]">
                {/* Card Header */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className={`p-3 rounded-xl ${category.skills[0].bgColor} bg-opacity-10`}>
                    <div className={`text-2xl ${category.skills[0].color}`}>
                      {category.skills[0].icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {category.category}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${skill.bgColor} bg-opacity-10`}>
                            <div className={`text-lg ${skill.color}`}>
                              {skill.icon}
                            </div>
                          </div>
                          <span className="font-semibold text-gray-700 dark:text-gray-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-bold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                          {skill.level}%
                        </span>
                      </div>
                      <SkillProgressBar level={skill.level} bgColor={skill.bgColor} />
                    </div>
                  ))}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                  <div className="absolute w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 transform rotate-45 -translate-y-16 translate-x-8"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-4 justify-center items-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Currently Learning</span>
            </div>
            <div className="text-gray-400 dark:text-gray-400">•</div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Advanced Level</span>
            </div>
            <div className="text-gray-400 dark:text-gray-400">•</div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <span>Intermediate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;