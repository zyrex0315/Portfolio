import React from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import meImg from '../assets/me.jpg';

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="relative py-10 sm:py-16 md:py-24 bg-white dark:bg-[#0e0e13]">
      <div className="container mx-auto px-2 sm:px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            variants={fadeUpVariant}
          >
            About Me
          </motion.h2>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {/* Image */}
          <motion.div
            variants={fadeUpVariant}
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
            variants={containerVariants}
            className="w-full lg:w-1/2 will-change-transform"
          >
            <motion.h3
              className="text-xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8"
              variants={fadeUpVariant}
            >
              About Me
            </motion.h3>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 dark:text-gray-300">
              <motion.p variants={fadeUpVariant}>
                I'm a frontend developer with knowledge of backend tools and strong skills in graphic design, allowing me to create both functional and visually appealing web experiences.
              </motion.p>
              <motion.p variants={fadeUpVariant}>
                As a new developer, I'm eager to learn, grow, and take on new challenges to build my skills and experience in the field.
              </motion.p>
              <motion.p variants={fadeUpVariant}>
                When I'm not coding, you can find me exploring new technologies, 
                collaborating with fellow developers, or finding inspiration in the 
                world around me.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-8 sm:mt-12">
              <motion.div variants={fadeUpVariant}>
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
              <motion.div variants={fadeUpVariant}>
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
