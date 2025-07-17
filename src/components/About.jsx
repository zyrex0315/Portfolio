import React from "react";
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import meImg from '../assets/me.jpg';


export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  
  const transition = { duration: 0.5 };

  return (
    <section id="about" className="relative py-10 sm:py-16 md:py-24 bg-white dark:bg-[#0e0e13]">
      <div className="container mx-auto px-2 sm:px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition }
          }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-12 items-start">
        
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={transition}
            className="w-full lg:w-1/2 relative overflow-hidden rounded-lg will-change-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg opacity-10 blur-2xl transform translate-x-4 -translate-y-4"></div>
            <div className="relative overflow-hidden rounded-lg border-8 border-white dark:border-gray-800 shadow-2xl max-w-xs mx-auto lg:max-w-none">
              <img 
                src={meImg} 
                alt="Developer portrait" 
                className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105"
              />
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-12 h-12 sm:w-20 sm:h-20 border-t-4 border-l-4 border-indigo-600 opacity-70"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 sm:w-20 sm:h-20 border-b-4 border-r-4 border-indigo-600 opacity-70"></div>
            </div>
            
           
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={transition}
            className="w-full lg:w-1/2 will-change-transform"
          >
            <motion.h3 
              className="text-xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={transition}
            >
              About Me
            </motion.h3>
            
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 dark:text-gray-300">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={transition}
              >
                I'm a frontend developer with knowledge of backend tools and strong skills in graphic design, allowing me to create both functional and visually appealing web experiences.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={transition}
              >
                As a new developer, I'm eager to learn, grow, and take on new challenges to build my skills and experience in the field.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={transition}
              >
                When I'm not coding, you can find me exploring new technologies, 
                collaborating with fellow developers, or finding inspiration in the 
                world around me.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-8 sm:mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={transition}
              >
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-10 h-1 bg-indigo-600 mr-3"></span>
                  Skills
                </h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2"></span>
                    HTML/CSS/JavaScript
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2"></span>
                    React & JavaScript
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2"></span>
                    Responsive Web Design
                  </li>
                 
                  
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={transition}
              >
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="w-10 h-1 bg-indigo-600 mr-3"></span>
                  Tools
                </h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2"></span>
                    VS Code & Modern IDEs
                  </li>
                
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2"></span>
                    Figma & Design Tools
                  </li>
                 
                 
                </ul>
              </motion.div>
            </div>
            
            {/* Download CV button */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="mt-8 sm:mt-12"
            >
              <a 
                href="#" 
                className="inline-flex sm:inline-flex w-full sm:w-auto items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download CV
              </a>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
