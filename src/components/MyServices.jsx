// import React from "react";
// import { motion } from "framer-motion";

// const services = [
//   {
//     icon: (
//       <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-xl mb-4 inline-block shadow-lg">
//         <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
//           <path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 17l-4-5 4-5M16 7l4 5-4 5"/>
//         </svg>
//       </div>
//     ),
//     title: "Web Design",
//     description: "Creating modern, responsive websites with clean code and exceptional user experiences. Specializing in React, Tailwind CSS, and cutting-edge web technologies.",
//     features: [
//       "Responsive Design",
//       "Modern UI/UX",
//       "Performance Optimized",
      
//     ],
//     link: "#",
//   },
//   {
//     icon: (
//       <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-4 rounded-xl mb-4 inline-block shadow-lg">
//         <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
//           <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" />
//           <path d="M8 15c1.333-2 6.667-2 8 0" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
//           <circle cx="9" cy="10" r="1" fill="#fff" />
//           <circle cx="15" cy="10" r="1" fill="#fff" />
//         </svg>
//       </div>
//     ),
//     title: "Graphic Designing",
//     description: "Transforming ideas into stunning visual designs. From brand identity to digital art, I create compelling graphics using Adobe Photoshop and modern design tools like Figma.",
//     features: [
//       "Brand Identity",
//       "Print Design",
//       "Digital Art",
//       "Logo Design"
//     ],
//     link: "#",
//   },
//   {
//     icon: (
//       <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-4 rounded-xl mb-4 inline-block shadow-lg">
//         <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
//           <rect x="6" y="4" width="12" height="16" rx="2" stroke="#fff" strokeWidth="2" />
//           <rect x="9" y="17" width="6" height="1" fill="#fff" />
//         </svg>
//       </div>
//     ),
//     title: "App Designing",
//     description: "Designing intuitive mobile applications with focus on user experience and modern interface principles. Creating apps that users love to interact with.",
//     features: [
//       "Native Apps",
//       "Cross Platform",
//       "UI/UX Design",
      
//     ],
//     link: "#",
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.18,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
// };

// export default function MyServices() {
//   return (
//     <section className="relative py-10 sm:py-16 md:py-24 min-h-screen flex items-center bg-white dark:bg-[#0e0e13] overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600/10 dark:bg-indigo-600/5 rounded-full filter blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/10 dark:bg-purple-600/5 rounded-full filter blur-3xl"></div>
//       </div>
      
//       {/* Grid pattern overlay */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.03] pointer-events-none"></div>

//       <div className="container mx-auto px-2 sm:px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-8 sm:mb-12 md:mb-16"
//         >
         
//           <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//             My Services
//           </h2>
//           <p className="mt-2 sm:mt-4 text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-3xl mx-auto">
//             I offer a comprehensive range of digital services to help bring your ideas to life
//           </p>
//         </motion.div>
        
//         <motion.div
//           className="grid md:grid-cols-3 gap-6 sm:gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {services.map((service, idx) => (
//             <motion.div
//               key={idx}
//               variants={cardVariants}
//               className="group relative bg-gray-50 dark:bg-gray-900/40 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-indigo-400/20 overflow-hidden"
//               whileHover={{ y: -8 }}
//               transition={{ type: "spring", stiffness: 200, damping: 18 }}
//             >
              
//               <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
//                 <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-100 dark:bg-indigo-600 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
//                 <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-100 dark:bg-purple-600 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
//               </div>
              
//               <div className="relative z-10">
//                 {service.icon}
//                 <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
//                   {service.title}
//                 </h3>
//                 <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
//                   {service.description}
//                 </p>
//                 <ul className="mb-6 space-y-2">
//                   {service.features.map((feature, i) => (
//                     <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
//                       <span className="mr-3 text-indigo-500 dark:text-indigo-400 text-lg">•</span>
//                       <span className="text-sm sm:text-base">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <a 
//                   href={service.link} 
//                   className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors duration-300 group/link"
//                 >
//                   Learn more
//                   <span className="ml-1 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
//                 </a>
//               </div>
              

//               <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100"></div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// } 