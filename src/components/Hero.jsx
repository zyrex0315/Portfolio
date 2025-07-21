import React from "react";
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import Background from './Background'; 


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

const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
};

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);

  // Detect dark mode using only Tailwind's class strategy
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const checkDark = () => setIsDarkMode(document.documentElement.classList.contains('dark'));
    checkDark();

    const observer = new MutationObserver(() => {
      checkDark();
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-white dark:bg-[#0e0e13]" ref={containerRef}>
      
     
      {isDarkMode && (
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <Background />
        </motion.div>
      )}

     
      <div className="hidden dark:block absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0e0e13] to-transparent z-10"></div>

      <motion.div
        style={{ y, opacity, scale, willChange: 'transform' }}
        className="container mx-auto px-2 sm:px-4 sm:px-6 lg:px-8 relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div variants={containerVariants}>
              <motion.span
                className="inline-block text-lg sm:text-xl md:text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2 tracking-wider uppercase"
                variants={fadeUpVariant}
              >
                Hi, I'm Suman Tachamo
              </motion.span>
              <motion.h1
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                variants={fadeUpVariant}
              >
                Crafting Digital <span className="relative">
                  <span className="bg-white bg-clip-text text-transparent">Experiences</span>
                </span>
              </motion.h1>
              <motion.p
                className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-2xl"
                variants={fadeUpVariant}
              >
                I create beautiful, responsive, and user-friendly web experiences with clean code and modern technologies that bring your vision to life.
              </motion.p>
              <motion.div
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
                variants={fadeUpVariant}
              >
                <motion.button
                  onClick={scrollToProjects}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 text-center shadow-lg hover:shadow-xl flex items-center justify-center"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span>View My Work</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
                <motion.button
                  onClick={scrollToContact}
                  className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-700 transition-colors duration-300 text-center shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Contact Me
                </motion.button>
              </motion.div>
              {/* Social links */}
              <motion.div
                className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6"
                variants={fadeInVariant}
              >
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Follow me:</span>
                <div className="flex space-x-4">
                  {[
                    { icon: "github", url: "https://github.com/zyrex0315" },
                    { icon: "linkedin", url: "https://www.linkedin.com/in/suman-tachamo" },
                    { icon: "instagram", url: "https://www.instagram.com/suman.tch/" },
                  ].map((social) => (
                    <a
                      key={social.icon}
                      href={social.url}
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{social.icon}</span>
                      <motion.span
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ display: 'inline-block' }}
                      >
                        <SocialIcon type={social.icon} />
                      </motion.span>
                    </a>
                  ))}
                </div>
              </motion.div>
              {/* Mobile scroll down indicator */}
              <motion.div
                className="w-full flex flex-col items-center justify-center mt-6 sm:mt-10 lg:hidden"
                variants={fadeInVariant}
              >
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2 text-center">Scroll Down</span>
                <motion.div
                  className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-1"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          {/* Right: Image Content */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
            style={{ willChange: 'transform' }}
          >
            <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <motion.div
                className="absolute -top-6 -left-6 w-full h-full rounded-full bg-indigo-600/10 dark:bg-indigo-600/20"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
                style={{ willChange: 'transform' }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-full h-full rounded-full bg-purple-600/10 dark:bg-purple-600/20"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                style={{ willChange: 'transform' }}
              ></motion.div>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-full opacity-10 blur-3xl transform -translate-x-4 translate-y-4"></div>
              <div className="relative overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-2xl bg-[#181926] w-full h-full">
                <motion.img
                  src="https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Developer Portrait"
                  className="w-full h-full object-cover object-center"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  style={{ willChange: 'transform' }}
                />
                <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* Desktop scroll down indicator */}
      <motion.div
        className="hidden lg:flex flex-col items-center absolute left-1/2 transform -translate-x-1/2 bottom-8 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7, ease: 'easeOut' }}
      >
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 text-center">Scroll Down</span>
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialIcon({ type }) {
  switch (type) {
    case 'github':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 1000 1000" aria-hidden="true">
          <path d="M 503 25C 631 25 647 26 697 28C 748 30 782 38 812 50C 843 62 870 78 896 105C 922 131 938 157 950 188C 962 218 970 253 972 303C 975 353 975 369 975 498C 975 626 975 642 972 693C 970 743 962 777 950 807C 938 838 922 865 896 891C 870 917 843 934 812 946C 782 957 748 965 698 968C 647 970 631 970 503 970C 374 970 358 970 308 968C 257 965 223 957 193 946C 162 934 136 917 109 891C 83 865 67 838 55 807C 43 777 35 743 33 693C 31 642 30 626 30 498C 30 369 31 353 33 303C 35 253 43 218 55 188C 67 157 83 131 109 105C 136 78 162 62 193 50C 223 38 258 30 308 28C 358 26 374 25 503 25C 503 25 503 25 503 25M 460 110C 372 110 355 111 312 113C 266 115 241 123 224 129C 202 138 186 148 170 165C 153 181 143 197 134 219C 128 236 120 261 118 307C 116 356 115 371 115 498C 115 624 116 639 118 689C 120 735 128 760 134 776C 143 798 153 814 170 831C 186 847 202 857 224 866C 241 872 266 880 312 882C 362 885 377 885 503 885C 629 885 644 885 694 882C 740 880 765 873 781 866C 804 857 819 847 836 831C 852 814 863 798 871 776C 878 760 885 735 887 689C 890 639 890 624 890 498C 890 372 890 357 887 307C 885 261 878 236 871 219C 863 197 852 181 836 165C 819 148 804 138 781 129C 765 123 740 115 694 113C 644 111 629 110 503 110C 487 110 473 110 460 110C 460 110 460 110 460 110M 755 189C 786 189 812 214 812 246C 812 277 786 302 755 302C 724 302 698 277 698 246C 698 214 724 189 755 189C 755 189 755 189 755 189M 503 255C 637 255 745 364 745 498C 745 632 637 740 503 740C 369 740 260 632 260 498C 260 364 369 255 503 255C 503 255 503 255 503 255M 345 498C 345 585 416 655 503 655C 590 655 660 585 660 498C 660 411 590 340 503 340C 416 340 345 411 345 498C 345 498 345 498 345 498" />
        </svg>
      );
    default:
      return null;
  }
}
