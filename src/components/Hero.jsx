import React from "react";
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import meImage from '../assets/me.jpg';


export default function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  
  const controls = useAnimation();
  
  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0 } 
      });
    };
    
    sequence();
  }, [controls]); 

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-white dark:bg-[#0e0e13]" ref={containerRef}>
     
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600/10 dark:bg-indigo-600/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/10 dark:bg-purple-600/5 rounded-full filter blur-3xl"></div>
      </div>
      
    
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.03] pointer-events-none"></div>
      
      <motion.div style={{ y, opacity, scale }} className="container mx-auto px-2 sm:px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0 }} 
            >
              <motion.span 
                className="inline-block text-lg sm:text-xl md:text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2 tracking-wider uppercase"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 }}  
              >
                Hi, I'm Suman Tachamo
              </motion.span>
              
              <motion.h1 
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 }} 
              >
                Crafting Digital <span className="relative">
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Experiences</span>
                </span>
              </motion.h1>
              
              <motion.p 
                className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 }} 
              >
                I create beautiful, responsive, and user-friendly web experiences with clean code and modern technologies that bring your vision to life.
              </motion.p>
              
              <motion.div 
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 }} 
              >
                <motion.button 
                  onClick={scrollToProjects}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 text-center shadow-lg hover:shadow-xl flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View My Work</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
                
                <motion.button 
                  onClick={scrollToContact}
                  className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-700 transition-colors duration-300 text-center shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </motion.div>
              
              {/* Social links */}
              <motion.div 
                className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Follow me:</span>
                <div className="flex space-x-4">
                  {[
                    { icon: "github", url: "https://github.com/zyrex0315" },
                    { icon: "linkedin", url: "https://www.linkedin.com/in/suman-tachamo" },
                    { icon: "instagram", url: "https://www.instagram.com/suman.tch/" },
                  ].map((social, index) => (
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
            
              <motion.div 
                className="w-full flex flex-col items-center justify-center mt-6 sm:mt-10 lg:hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
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
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
          
              <motion.div 
                className="absolute -top-6 -left-6 w-full h-full rounded-full bg-indigo-600/10 dark:bg-indigo-600/20"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 w-full h-full rounded-full bg-purple-600/10 dark:bg-purple-600/20"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
              ></motion.div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-full opacity-10 blur-3xl transform -translate-x-4 translate-y-4"></div>
              
              <div className="relative overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-2xl bg-[#181926] w-full h-full">
                <motion.img 
                  src="https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Developer Portrait" 
                  className="w-full h-full object-cover object-center"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7 }}
                />

                <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
   
      <motion.div 
        className="hidden lg:flex flex-col items-center absolute left-1/2 transform -translate-x-1/2 bottom-8 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
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
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" />
        </svg>
      );
    default:
      return null;
  }
}
