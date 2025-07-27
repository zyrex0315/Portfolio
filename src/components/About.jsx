import React from "react";
import { motion, useInView } from 'framer-motion';

const meImg = "/src/assets/me.jpg";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, rotateX: -20, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
};

// Typewriter effect component
const TypewriterText = ({ text, delay = 0, className = "" }) => {
  const [displayedText, setDisplayedText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80 + Math.random() * 40);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  React.useEffect(() => {
    const startTimeout = setTimeout(() => {
      setCurrentIndex(0);
      setDisplayedText('');
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
          animate={index < currentIndex ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

// Enhanced gradient text component
const GradientHighlightText = ({ children, delay = 0 }) => {
  const [isHighlighted, setIsHighlighted] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsHighlighted(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <span className="relative inline-block">
      <motion.span
        className="relative z-10 bg-gradient-to-r from-indigo-600 via-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, scale: 0.95, rotateZ: -5 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotateZ: 0,
          backgroundPosition: ['0% 50%', '100% 50%', '200% 50%', '0% 50%'],
          filter: [
            'hue-rotate(0deg) brightness(1)',
            'hue-rotate(10deg) brightness(1.1)',
            'hue-rotate(-5deg) brightness(1.05)',
            'hue-rotate(0deg) brightness(1)'
          ]
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          backgroundPosition: { duration: 6, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }
        }}
        style={{
          backgroundSize: '400% 400%',
        }}
      >
        {children}
      </motion.span>
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-xl blur-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isHighlighted ? [0, 0.8, 0.4, 0.6] : 0,
          scale: isHighlighted ? [0.8, 1.3, 1.1, 1.2] : 0.8,
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      />
      
      <motion.div
        className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full"
        initial={{ scaleX: 0, opacity: 0, y: 5 }}
        animate={{ 
          scaleX: isHighlighted ? 1 : 0, 
          opacity: isHighlighted ? [0, 1, 0.8, 1] : 0,
          y: isHighlighted ? 0 : 5
        }}
        transition={{ 
          duration: 1.2, 
          delay: 0.3, 
          ease: [0.68, -0.55, 0.265, 1.55]
        }}
      />
    </span>
  );
};

export default function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.1,
    once: true // Ensures animation plays only once when it enters view
  });

  return (
    <section id="about" className="relative py-10 sm:py-16 md:py-24 bg-white dark:bg-[#0e0e13]">
      <div className="container mx-auto px-2 sm:px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-8 sm:mb-12 md:mb-16"
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="mb-4"
            variants={fadeUpVariant}
          >
            <TypewriterText
              text="Get to know me better"
              delay={0}
              className="inline-block text-sm sm:text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-4"
            />
          </motion.div>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-bold"
            variants={fadeUpVariant}
          >
            <GradientHighlightText delay={1000}>
              About Me
            </GradientHighlightText>
          </motion.h2>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          style={{ perspective: 1000 }}
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
