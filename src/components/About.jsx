import meImg from "../assets/me.jpg" ;
import React, { useRef } from "react";
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.1,
  });

  // Optimized animation variants with reduced complexity
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      }
    }
  };

  // Optimized WordReveal component
  const WordReveal = React.memo(({ text, className, delay = 0 }) => (
    <motion.div 
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.05, delayChildren: delay }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.4,
              }
            }
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  ));

  // Optimized AnimatedText component
  const AnimatedText = React.memo(({ text, className, delay = 0 }) => (
    <motion.div
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.02, delayChildren: delay }}
    >
      {text.split("").map((char, index) => (
        <motion.span 
          key={index} 
          variants={{
            hidden: { 
              opacity: 0, 
              y: 20, 
              rotateX: -45,
              scale: 0.9
            },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              transition: {
                duration: 0.4,
              }
            }
          }}
          style={{ display: 'inline-block' }}
          whileHover={{ 
            scale: 1.1, 
            color: "#8b5cf6",
            transition: { duration: 0.2 }
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  ));

  // Skill item component for better performance
  const SkillItem = React.memo(({ skill, index, delay, gradient }) => (
    <motion.div
      className="flex items-center cursor-pointer group"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0,
        transition: { 
          delay: delay + index * 0.1,
          duration: 0.4,
        }
      } : { opacity: 0, x: -20 }}
      whileHover={{ 
        scale: 1.02, 
        x: 8,
        transition: { duration: 0.2 }
      }}
    >
      <motion.span
        className={`w-2.5 h-2.5 ${gradient} rounded-full mr-3`}
        whileHover={{ 
          scale: 1.8, 
          rotate: 180,
          transition: { duration: 0.3 }
        }}
      />
      <motion.span className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
        {skill}
      </motion.span>
    </motion.div>
  ));

  return (
    <section 
      id="about" 
      ref={ref}
      className="relative py-10 sm:py-16 md:py-24 bg-white dark:bg-[#0e0e13] overflow-hidden"
    >
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-25 blur-2xl"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -8, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 0.5
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-xl"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 3
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div variants={itemVariants}>
            <AnimatedText
              text="About Me"
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
              delay={0.2}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-2/5 relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl max-w-md mx-auto lg:max-w-none">
              <motion.img
                src={meImg}
                alt="My portrait"
                className="w-full h-auto rounded-3xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              />
              
              {/* Decorative corner elements */}
              <motion.div
                className="absolute top-4 left-4 w-16 h-16 border-t-3 border-l-3 border-indigo-500/60"
                initial={{ scale: 0, rotate: -90 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
              />
              <motion.div
                className="absolute bottom-4 right-4 w-16 h-16 border-b-3 border-r-3 border-purple-500/60"
                initial={{ scale: 0, rotate: 90 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 90 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.2, rotate: -10 }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-3/5"
          >
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 mb-12">
              <motion.div variants={textVariants}>
                <WordReveal
                  text="I'm a frontend developer with knowledge of backend tools and strong skills in graphic design, allowing me to create both functional and visually appealing web experiences."
                  className="leading-relaxed"
                  delay={0.4}
                />
              </motion.div>
              
              <motion.div variants={textVariants}>
                <WordReveal
                  text="As a new developer, I'm eager to learn, grow, and take on new challenges to build my skills and experience in the field."
                  className="leading-relaxed"
                  delay={0.8}
                />
              </motion.div>
              
              <motion.div variants={textVariants}>
                <WordReveal
                  text="When I'm not coding, you can find me exploring new technologies, collaborating with fellow developers, or finding inspiration in the world around me."
                  className="leading-relaxed"
                  delay={1.2}
                />
              </motion.div>
            </div>

            {/* Skills and Tools Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-6">
                  <motion.div
                    className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mr-4"
                    initial={{ height: 0 }}
                    animate={isInView ? { height: 32 } : { height: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                  />
                  <AnimatedText
                    text="Skills"
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                    delay={1.6}
                  />
                </div>
                
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  {[
                    "HTML/CSS/JavaScript",
                    "React & JavaScript", 
                    "Responsive Web Design"
                  ].map((skill, index) => (
                    <SkillItem
                      key={skill}
                      skill={skill}
                      index={index}
                      delay={2}
                      gradient="bg-gradient-to-r from-indigo-500 to-purple-500"
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-6">
                  <motion.div
                    className="w-1 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full mr-4"
                    initial={{ height: 0 }}
                    animate={isInView ? { height: 32 } : { height: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                  />
                  <AnimatedText
                    text="Tools"
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                    delay={2.3}
                  />
                </div>
                
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  {[
                    "VS Code & Modern IDEs",
                    "Figma & Design Tools"
                  ].map((tool, index) => (
                    <SkillItem
                      key={tool}
                      skill={tool}
                      index={index}
                      delay={2.5}
                      gradient="bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
