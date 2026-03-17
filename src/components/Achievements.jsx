// import React from 'react';
// import { FiAward, FiCalendar, FiExternalLink } from 'react-icons/fi';

// const Achievements = () => {
//   const achievements = [
//     {
//       type: "Hackathon",
//       title: "1st Place - TechFest Hackathon 2023",
//       organization: "ABC University",
//       date: "Nov 2023",
//       description: "Built a real-time collaboration tool for developers",
//       link: "#"
//     },
//     {
//       type: "Certification",
//       title: "React Frontend Developer",
//       organization: "Coursera",
//       date: "Aug 2023",
//       description: "Advanced React patterns and best practices",
//       link: "#"
//     },
//     {
//       type: "Award",
//       title: "Student Innovator Award",
//       organization: "Tech Society",
//       date: "May 2023",
//       description: "Recognized for innovative project solutions",
//       link: "#"
//     },
//     {
//       type: "Certification",
//       title: "JavaScript Algorithms",
//       organization: "freeCodeCamp",
//       date: "Mar 2023",
//       description: "300+ hours of JavaScript algorithm challenges",
//       link: "#"
//     }
//   ];

//   return (
//     <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900/50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12 animate__animated animate__fadeIn">
//           <div className="inline-flex items-center space-x-2 mb-4">
//             <FiAward className="text-primary-600 dark:text-primary-400" size={24} />
//             <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
//           </div>
//           <p className="text-gray-600 dark:text-gray-300">Milestones and recognitions</p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//           {achievements.map((achievement, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group animate__animated animate__fadeInUp"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="flex items-start justify-between mb-4">
//                 <div className="flex items-center space-x-3">
//                   <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
//                     <FiAward className="text-primary-600 dark:text-primary-400" />
//                   </div>
//                   <div>
//                     <span className="inline-block px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded text-xs font-medium">
//                       {achievement.type}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
//                   <FiCalendar size={14} />
//                   <span>{achievement.date}</span>
//                 </div>
//               </div>

//               <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
//               <div className="text-primary-600 dark:text-primary-400 mb-3 font-medium">
//                 {achievement.organization}
//               </div>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">
//                 {achievement.description}
//               </p>

//               {achievement.link && (
//                 <a
//                   href={achievement.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center space-x-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
//                 >
//                   <span>View Details</span>
//                   <FiExternalLink size={14} />
//                 </a>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Achievements;

import React from 'react'

const Achievements = () => {
  return (
    <div></div>
  )
}

export default Achievements