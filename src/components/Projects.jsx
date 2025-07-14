// import React, { useEffect, useState, useRef } from "react";
// import { motion, useAnimation, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { ChevronLeft, ChevronRight, ExternalLink, Github, Star } from 'lucide-react';
// import { defaultTransition, usePrefersReducedMotion } from '../animationConfig';

// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Dashboard",
//     description: "A responsive admin dashboard with dark mode, analytics charts, and product management. Built for optimal UX and performance.",
//     image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     tags: ["React", "Tailwind CSS", "Redux", "Recharts"],
//     liveUrl: "#",
//     codeUrl: "https://github.com/zyrex0315",
//     featured: true
//   },
//   {
//     id: 2,
//     title: "Weather Application",
//     description: "A beautiful weather app with location detection, 7-day forecast, and animated weather icons. Includes real-time data updates.",
//     image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     tags: ["React", "CSS Modules", "OpenWeather API"],
//     liveUrl: "#",
//     codeUrl: "https://github.com/zyrex0315",
//     featured: false
//   },
//   {
//     id: 3,
//     title: "Social Media Platform",
//     description: "A responsive social network with real-time chat, post creation, and user profiles. Features modern UI and smooth interactions.",
//     image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
//     tags: ["React", "Firebase", "Styled Components"],
//     liveUrl: "#",
//     codeUrl: "https://github.com/zyrex0315",
//     featured: true
//   },
//   {
//     id: 4,
//     title: "Productivity App",
//     description: "Task management application with Kanban board, calendar integration, and productivity analytics. Built for maximum efficiency.",
//     image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     tags: ["React", "Node.js", "MongoDB", "Chart.js"],
//     liveUrl: "#",
//     codeUrl: "#", 
//     featured: false
//   }
// ];

// const ProjectCard = ({ project, index, fullView = false }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true
//   });
  
//   const [isHovered, setIsHovered] = useState(false);
//   const prefersReducedMotion = usePrefersReducedMotion();

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   const transition = prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 };

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         hidden: { opacity: 0, y: 50 },
//         visible: { 
//           opacity: 1, 
//           y: 0,
//           transition
//         }
//       }}
//       className={`relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden ${
//         fullView ? 'shadow-xl' : 'shadow-lg hover:shadow-xl'
//       } transition-all duration-500 h-full group`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Featured Tag */}
//       {project.featured && (
//         <span className="absolute top-3 left-3 z-20 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full shadow">
//           Featured
//         </span>
//       )}
//       <div className={`relative ${fullView ? 'h-72' : 'h-48 sm:h-56 md:h-64'} overflow-hidden`}>
//         <motion.img 
//           src={project.image}
//           alt={project.title}
//           className="w-full h-full object-cover object-center transition-transform duration-700"
//           animate={{ scale: isHovered && !prefersReducedMotion ? 1.05 : 1 }}
//           transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4 }}
//         />
//         {/* Overlay with details on hover */}
//         <motion.div
//           className="absolute inset-0 flex flex-col justify-center items-start p-6 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: isHovered && !prefersReducedMotion ? 1 : 0 }}
//           transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3 }}
//         >
//           <div className="text-white text-base font-medium mb-1">{project.tags[0]}</div>
//           <div className="text-2xl font-bold text-white mb-1">{project.title}</div>
//           <div className="text-white text-base mb-4 leading-snug">{project.description}</div>
//           <a
//             href={project.liveUrl !== "#" ? project.liveUrl : project.codeUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 shadow"
//           >
//             View Project <ExternalLink size={16} />
//           </a>
//         </motion.div>
//       </div>
//       {/* Remove always-visible details below image */}
//       {/* <div className="p-6"> ... </div> */}
//       <div className={`absolute top-2 right-2 w-3 h-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
//     </motion.div>
//   );
// };

// export default function Projects() {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true
//   });
  
//   const [currentProject, setCurrentProject] = useState(0);
//   const [autoplay, setAutoplay] = useState(true);
//   const autoplayTimerRef = useRef(null);
//   const featuredProjects = projects.filter(project => project.featured);
//   const [showAllProjects, setShowAllProjects] = useState(false);
//   const prefersReducedMotion = usePrefersReducedMotion();

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);
  
//   useEffect(() => {
//     if (autoplay && !prefersReducedMotion) {
//       autoplayTimerRef.current = setInterval(() => {
//         setCurrentProject(prev => (prev + 1) % featuredProjects.length);
//       }, 5000);
//     }
//     return () => {
//       if (autoplayTimerRef.current) {
//         clearInterval(autoplayTimerRef.current);
//         autoplayTimerRef.current = null;
//       }
//     };
//   }, [autoplay, featuredProjects.length, prefersReducedMotion]);
  
//   const handlePrevProject = () => {
//     setAutoplay(false);
//     setCurrentProject(prev => (prev - 1 + featuredProjects.length) % featuredProjects.length);
//   };
  
//   const handleNextProject = () => {
//     setAutoplay(false);
//     setCurrentProject(prev => (prev + 1) % featuredProjects.length);
//   };

//   const transition = prefersReducedMotion ? { duration: 0 } : defaultTransition;

//   return (
//     <section id="projects" className="relative py-10 sm:py-16 md:py-24 min-h-screen flex items-center bg-white dark:bg-[#0e0e13]">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600/10 dark:bg-indigo-600/5 rounded-full filter blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/10 dark:bg-purple-600/5 rounded-full filter blur-3xl"></div>
//       </div>
//       {/* Grid pattern */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.03] pointer-events-none"></div>
//       <div className="container mx-auto px-2 sm:px-4 sm:px-6 lg:px-8 relative">
//         <motion.div
//           ref={ref}
//           initial="hidden"
//           animate={controls}
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0, transition }
//           }}
//           className="text-center mb-8 sm:mb-12 md:mb-16"
//         >
//           <motion.span 
//             className="inline-block text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2 tracking-wider uppercase"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={prefersReducedMotion ? { duration: 0 } : { ...defaultTransition, delay: 0.1 }}
//           >
//             My Work
//           </motion.span>
//           <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//             Featured Projects
//           </h2>
//           <p className="mt-2 sm:mt-4 text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-3xl mx-auto">
//             A selection of my recent work, showcasing my skills and passion for creating exceptional user interfaces.
//           </p>
//         </motion.div>
        
//         {/* Featured Project Showcase */}
//         <div className="mb-10 sm:mb-20">
//           <div className="relative bg-gray-50 dark:bg-[#181926] rounded-2xl p-2 sm:p-4 md:p-8 shadow-xl overflow-hidden">
//             {/* Background decoration */}
//             <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
//               <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-100 dark:bg-indigo-600 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
//               <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-100 dark:bg-purple-600 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
//             </div>
            
//             <div className="flex flex-col md:flex-row gap-4 sm:gap-8 items-center relative z-10">
//               <div className="w-full md:w-1/2 lg:w-3/5">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={currentProject}
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     transition={prefersReducedMotion ? { duration: 0 } : defaultTransition}
//                     className="relative rounded-xl overflow-hidden shadow-2xl aspect-[16/9] bg-gray-100 dark:bg-gray-900"
//                   >
//                     <img 
//                       src={featuredProjects[currentProject].image} 
//                       alt={featuredProjects[currentProject].title}
//                       className="w-full h-full object-cover object-center block"
//                       style={{ display: 'block' }}
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent dark:from-black/60 dark:via-black/20 dark:to-transparent"></div>
//                   </motion.div>
//                 </AnimatePresence>
                
//                 {/* Navigation controls */}
//                 <div className="flex justify-center mt-2 sm:mt-4 gap-2">
//                   {featuredProjects.map((_, index) => (
//                     <button
//                       key={index}
//                       className={`w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
//                         index === currentProject 
//                           ? 'bg-indigo-600 w-8' 
//                           : 'bg-gray-300 dark:bg-gray-700 hover:bg-indigo-400 dark:hover:bg-indigo-700'
//                       }`}
//                       onClick={() => {
//                         setAutoplay(false);
//                         setCurrentProject(index);
//                       }}
//                       aria-label={`View project ${index + 1}`}
//                     ></button>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="w-full md:w-1/2 lg:w-2/5">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={currentProject}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={prefersReducedMotion ? { duration: 0 } : defaultTransition}
//                   >
//                     <div className="bg-white dark:bg-[#0e0e13]/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
//                       <span className="inline-block bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
//                         Featured Project
//                       </span>
                      
//                       <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
//                         {featuredProjects[currentProject].title}
//                       </h3>
                      
//                       <p className="text-gray-700 dark:text-gray-300 mb-6">
//                         {featuredProjects[currentProject].description}
//                       </p>
                      
//                       <div className="flex flex-wrap gap-2 mb-6">
//                         {featuredProjects[currentProject].tags.map(tag => (
//                           <span 
//                             key={tag} 
//                             className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-full"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
                      
//                       <div className="flex gap-4">
//                         {featuredProjects[currentProject].liveUrl && (
//                           <motion.a 
//                             href={featuredProjects[currentProject].liveUrl}
//                             className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                           >
//                             <ExternalLink size={16} /> Live Demo
//                           </motion.a>
//                         )}
                        
//                         {featuredProjects[currentProject].codeUrl && (
//                           <motion.a 
//                             href={featuredProjects[currentProject].codeUrl}
//                             className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                           >
//                             <Github size={16} /> View Code
//                           </motion.a>
//                         )}
//                       </div>
//                     </div>
//                   </motion.div>
//                 </AnimatePresence>
                
//                 <div className="flex justify-end mt-4">
//                   <div className="flex gap-2">
//                     <motion.button
//                       onClick={handlePrevProject}
//                       className="p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm hover:shadow text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
//                       whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
//                       whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
//                     >
//                       <ChevronLeft size={20} />
//                     </motion.button>
                    
//                     <motion.button
//                       onClick={handleNextProject}
//                       className="p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm hover:shadow text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
//                       whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
//                       whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
//                     >
//                       <ChevronRight size={20} />
//                     </motion.button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* All Projects Grid */}
//         <AnimatePresence>
//         {showAllProjects && (
//           <motion.div
//             className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3, ease: 'easeInOut' }}
//           >
//             {projects.map((project, idx) => (
//               <ProjectCard key={project.id} project={project} index={idx} />
//             ))}
//           </motion.div>
//         )}
//         </AnimatePresence>
        
//         <div className="mt-12 text-center">
//           <motion.a 
//             href="#"
//             className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
//             whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
//             whileTap={{ scale: 0.95 }}
//             onClick={e => { e.preventDefault(); setShowAllProjects(v => !v); }}
//           >
//             {showAllProjects ? 'Hide All Projects' : 'View All Projects'} <ExternalLink size={16} className="ml-2" />
//           </motion.a>
//         </div>
//       </div>
//     </section>
//   );
// }
