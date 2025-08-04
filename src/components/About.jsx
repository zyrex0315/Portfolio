import React from "react";
import { motion, useInView, useAnimation } from 'framer-motion';
import meImg from "../assets/me.jpg"


export default function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  // Define animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      }
    }
  };

  const charVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      rotateX: -90,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      scale: 0.8,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
      }
    }
  };

  // Advanced typewriter effect
  const TypewriterText = ({ text, className, delay = 0 }) => {
    const controls = useAnimation();
    
    React.useEffect(() => {
      if (isInView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [isInView, controls]);

    return (
      <motion.div className={className}>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { 
                  delay: delay + index * 0.05,
                  duration: 0.3,
                }
              }
            }}
            style={{ display: 'inline-block' }}
            className="relative"
          >
            {char === " " ? "\u00A0" : char}
            {/* Cursor effect for last character */}
           
          </motion.span>
        ))}
      </motion.div>
    );
  };

  // Word-by-word reveal animation
  const WordReveal = ({ text, className, delay = 0 }) => (
    <motion.div 
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.1, delayChildren: delay }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-2"
          
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );

  // Character cascade animation
  const AnimatedText = ({ text, className, delay = 0 }) => (
    <motion.div
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.03, delayChildren: delay }}
    >
      {text.split("").map((char, index) => (
        <motion.span 
          key={index} 
          variants={charVariants}
          style={{ display: 'inline-block' }}
          whileHover={{ 
            scale: 1.2, 
            color: "#8b5cf6",
            transition: { duration: 0.1 }
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );

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
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <AnimatedText
            text="About Me"
            className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
            delay={0.2}
          />
          
         
          
          
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-start"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative overflow-hidden rounded-2xl border-4 border-white dark:border-gray-700 shadow-2xl max-w-sm mx-auto lg:max-w-none">
              <motion.img
                src={meImg}
                alt="Developer portrait"
                className="w-full h-auto rounded-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 1.0 }}
                whileHover={{ scale: 1.05 }}
              />
              
              {/* Decorative elements */}
              <motion.div
                className="absolute top-6 left-6 w-16 h-16 sm:w-24 sm:h-24 border-t-4 border-l-4 border-indigo-500 opacity-70"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 1, delay: 0.8 }}
                whileHover={{ scale: 1.3, rotate: 15, opacity: 1 }}
              />
              <motion.div
                className="absolute bottom-6 right-6 w-16 h-16 sm:w-24 sm:h-24 border-b-4 border-r-4 border-purple-500 opacity-70"
                initial={{ scale: 0, rotate: 180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
                transition={{ duration: 1, delay: 1.2 }}
                whileHover={{ scale: 1.3, rotate: -15, opacity: 1 }}
              />
              
              {/* Overlay effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 to-purple-600/30 rounded-2xl opacity-0"
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2"
          >
            

            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-gray-600 dark:text-gray-300">
              <motion.div className="leading-relaxed">
                <WordReveal
                  text="I'm a frontend developer with knowledge of backend tools and strong skills in graphic design, allowing me to create both functional and visually appealing web experiences."
                  className="leading-relaxed"
                  delay={0.3}
                />
              </motion.div>
              
              <motion.div className="leading-relaxed">
                <WordReveal
                  text="As a new developer, I'm eager to learn, grow, and take on new challenges to build my skills and experience in the field."
                  className="leading-relaxed"
                  delay={0.3}
                />
              </motion.div>
              
              <motion.div className="leading-relaxed">
                <WordReveal
                  text="When I'm not coding, you can find me exploring new technologies, collaborating with fellow developers, or finding inspiration in the world around me."
                  className="leading-relaxed"
                  delay={0.3}
                />
              </motion.div>
            </div>

            {/* Skills and Tools Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mt-10 sm:mt-16">
              <motion.div 
                variants={itemVariants}
              >
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <motion.span
                    className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mr-4 rounded-full"
                    initial={{ width: 12, scaleY: 1 }}
                    animate={isInView ? { width: 48, scaleY: 1 } : { width: 12, scaleY: 1 }}
                    transition={{ duration: 1, delay: 4 }}
                    whileHover={{ width: 80, scaleY: 3 }}
                  />
                  <AnimatedText
                    text="Skills"
                    className=""
                    delay={2.3}
                  />
                </div>
                
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  {[
                    "HTML/CSS/JavaScript",
                    "React & JavaScript", 
                    "Responsive Web Design"
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="flex items-center cursor-pointer group"
                      initial={{ opacity: 0, x: -30, rotateY: -90 }}
                      animate={isInView ? { 
                        opacity: 1, 
                        x: 0, 
                        rotateY: 0,
                        transition: { 
                          delay: 3.4 + index * 0.3,
                          duration: 0.8,
                        }
                      } : { opacity: 0, x: -30, rotateY: -90 }}
                      whileHover={{ 
                        scale: 1.05, 
                        x: 10,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.span
                        className="w-3 h-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mr-3"
                        whileHover={{ 
                          scale: 2.5, 
                          rotate: 360,
                          boxShadow: "0 0 20px rgba(99, 102, 241, 0.6)",
                          transition: { duration: 0.4 }
                        }}
                      />
                      <motion.span
                        className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
                      >
                        {skill}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
              >
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <motion.span
                    className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mr-4 rounded-full"
                    initial={{ width: 12, scaleY: 1 }}
                    animate={isInView ? { width: 48, scaleY: 1 } : { width: 12, scaleY: 1 }}
                    transition={{ duration: 1, delay: 4.8 }}
                    whileHover={{ width: 80, scaleY: 3 }}
                  />
                  <AnimatedText
                    text="Tools"
                    className=""
                    delay={3.8}
                  />
                </div>
                
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  {[
                    "VS Code & Modern IDEs",
                    "Figma & Design Tools"
                  ].map((tool, index) => (
                    <motion.div
                      key={tool}
                      className="flex items-center cursor-pointer group"
                      initial={{ opacity: 0, x: 30, rotateY: 90 }}
                      animate={isInView ? { 
                        opacity: 1, 
                        x: 0, 
                        rotateY: 0,
                        transition: { 
                          delay: 4.8 + index * 0.3,
                          duration: 0.8,
                        }
                      } : { opacity: 0, x: 30, rotateY: 90 }}
                      whileHover={{ 
                        scale: 1.05, 
                        x: 10,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.span
                        className="w-3 h-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3"
                        whileHover={{ 
                          scale: 2.5, 
                          rotate: 360,
                          boxShadow: "0 0 20px rgba(147, 51, 234, 0.6)",
                          transition: { duration: 0.4 }
                        }}
                      />
                      <motion.span
                        className="group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
                      >
                        {tool}
                      </motion.span>
                    </motion.div>
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
