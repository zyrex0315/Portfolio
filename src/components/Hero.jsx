import { useEffect, useRef, useState, memo, useMemo, useCallback } from 'react';
import { motion, useScroll, useTransform, useInView, useReducedMotion } from 'framer-motion';
import Background from './Background';

// Optimized animation variants with reduced complexity
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

const fadeInVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

// Optimized typewriter with better performance
const TypewriterText = memo(({ text, delay = 0, className = "", onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(text);
      setIsComplete(true);
      onComplete?.();
      return;
    }

    let timeout;
    let index = 0;

    const startTimeout = setTimeout(() => {
      const typeCharacter = () => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
          timeout = setTimeout(typeCharacter, 50 + Math.random() * 30);
        } else if (!isComplete) {
          setIsComplete(true);
          onComplete?.();
        }
      };
      typeCharacter();
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeout);
    };
  }, [text, delay, onComplete, isComplete, prefersReducedMotion]);

  const cursorAnimation = useMemo(() => ({
    animate: prefersReducedMotion ? {} : { opacity: [0, 1, 0] },
    transition: prefersReducedMotion ? {} : { duration: 0.8, repeat: Infinity, ease: "linear" }
  }), [prefersReducedMotion]);

  return (
    <span className={className}>
      {displayText}
      {!isComplete && (
        <motion.span
          className="inline-block w-0.5 h-6 bg-indigo-600 dark:bg-indigo-400 ml-1"
          {...cursorAnimation}
        />
      )}
    </span>
  );
});

TypewriterText.displayName = 'TypewriterText';

// Simplified gradient text with better performance
const GradientHighlightText = memo(({ children, delay = 0 }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsHighlighted(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  const gradientAnimation = useMemo(() => {
    if (prefersReducedMotion) return {};
    return {
      animate: {
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      },
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }
    };
  }, [prefersReducedMotion]);

  return (
    <span className="relative inline-block">
      <motion.span 
        className="relative z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
        style={{
          backgroundSize: '200% 200%',
        }}
        {...gradientAnimation}
      >
        {children}
      </motion.span>
      
      {/* Simplified glow effect - only show on larger screens */}
      <motion.div
        className="hidden md:block absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-indigo-600/20 rounded-lg blur-lg"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHighlighted && !prefersReducedMotion ? [0, 0.3, 0] : 0
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </span>
  );
});

GradientHighlightText.displayName = 'GradientHighlightText';

// Enhanced word reveal with letter-by-letter animation
const WordReveal = memo(({ text, delay = 0, className = "" }) => {
  const words = text.split(' ');
  const prefersReducedMotion = useReducedMotion();
  
  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }
  
  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              className="inline-block"
              initial={{ opacity: 0, y: 30, rotateX: -90, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: delay + wordIndex * 0.1 + letterIndex * 0.03,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100,
                damping: 12
              }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
});

WordReveal.displayName = 'WordReveal';

// Enhanced description animation with staggered word reveals
const DescriptionReveal = memo(({ text, delay = 0, className = "", isVisible = true }) => {
  const words = text.split(' ');
  const prefersReducedMotion = useReducedMotion();
  
  if (prefersReducedMotion) {
    return <p className={className}>{text}</p>;
  }
  
  return (
    <p className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block mr-1"
          initial={{ opacity: 0, filter: 'blur(4px)', y: 10 }}
          animate={isVisible ? { opacity: 1, filter: 'blur(0px)', y: 0 } : { opacity: 0, filter: 'blur(4px)', y: 10 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.05,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
});

DescriptionReveal.displayName = 'DescriptionReveal';

// Optimized social icon component
const SocialIcon = memo(({ type }) => {
  const iconPaths = {
    github: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
    linkedin: "M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z",
    instagram: "M 503 25C 631 25 647 26 697 28C 748 30 782 38 812 50C 843 62 870 78 896 105C 922 131 938 157 950 188C 962 218 970 253 972 303C 975 353 975 369 975 498C 975 626 975 642 972 693C 970 743 962 777 950 807C 938 838 922 865 896 891C 870 917 843 934 812 946C 782 957 748 965 698 968C 647 970 631 970 503 970C 374 970 358 970 308 968C 257 965 223 957 193 946C 162 934 136 917 109 891C 83 865 67 838 55 807C 43 777 35 743 33 693C 31 642 30 626 30 498C 30 369 31 353 33 303C 35 253 43 218 55 188C 67 157 83 131 109 105C 136 78 162 62 193 50C 223 38 258 30 308 28C 358 26 374 25 503 25C 503 25 503 25 503 25M 460 110C 372 110 355 111 312 113C 266 115 241 123 224 129C 202 138 186 148 170 165C 153 181 143 197 134 219C 128 236 120 261 118 307C 116 356 115 371 115 498C 115 624 116 639 118 689C 120 735 128 760 134 776C 143 798 153 814 170 831C 186 847 202 857 224 866C 241 872 266 880 312 882C 362 885 377 885 503 885C 629 885 644 885 694 882C 740 880 765 873 781 866C 804 857 819 847 836 831C 852 814 863 798 871 776C 878 760 885 735 887 689C 890 639 890 624 890 498C 890 372 890 357 887 307C 885 261 878 236 871 219C 863 197 852 181 836 165C 819 148 804 138 781 129C 765 123 740 115 694 113C 644 111 629 110 503 110C 487 110 473 110 460 110C 460 110 460 110 460 110M 755 189C 786 189 812 214 812 246C 812 277 786 302 755 302C 724 302 698 277 698 246C 698 214 724 189 755 189C 755 189 755 189 755 189M 503 255C 637 255 745 364 745 498C 745 632 637 740 503 740C 369 740 260 632 260 498C 260 364 369 255 503 255C 503 255 503 255 503 255M 345 498C 345 585 416 655 503 655C 590 655 660 585 660 498C 660 411 590 340 503 340C 416 340 345 411 345 498C 345 498 345 498 345 498"
  };

  const viewBox = type === 'instagram' ? "0 0 1000 1000" : "0 0 24 24";

  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox={viewBox} aria-hidden="true">
      <path fillRule="evenodd" d={iconPaths[type]} clipRule="evenodd" />
    </svg>
  );
});

SocialIcon.displayName = 'SocialIcon';

// Main optimized hero component
export default function OptimizedHero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const isInView = useInView(textRef, { once: false, amount: 0.3 });
  
  // Optimized scroll transforms
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showMainHeading, setShowMainHeading] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  // Optimized dark mode detection
  useEffect(() => {
    const checkDark = () => setIsDarkMode(document.documentElement.classList.contains('dark'));
    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  // Optimized animation timing with re-trigger capability
  useEffect(() => {
    if (isInView) {
      // When in view, start the animations
      const timer1 = setTimeout(() => setShowTypewriter(true), prefersReducedMotion ? 0 : 400);
      const timer2 = setTimeout(() => setShowMainHeading(true), prefersReducedMotion ? 0 : 1200);
      const timer3 = setTimeout(() => setShowDescription(true), prefersReducedMotion ? 0 : 1800);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    } else {
      // When out of view, reset the states to allow re-triggering
      setShowTypewriter(false);
      setShowMainHeading(false);
      setShowDescription(false);
    }
  }, [isInView, prefersReducedMotion]);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const socialLinks = useMemo(() => [
    { icon: "github", url: "https://github.com/zyrex0315", color: "hover:text-gray-800 dark:hover:text-white" },
    { icon: "linkedin", url: "https://www.linkedin.com/in/suman-tachamo", color: "hover:text-blue-600" },
    { icon: "instagram", url: "https://www.instagram.com/suman.tch/", color: "hover:text-pink-600" },
  ], []);

  const motionStyles = useMemo(() => ({
    y: prefersReducedMotion ? 0 : y,
    opacity: prefersReducedMotion ? 1 : opacity,
    scale: prefersReducedMotion ? 1 : scale,
    willChange: prefersReducedMotion ? 'auto' : 'transform'
  }), [y, opacity, scale, prefersReducedMotion]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 bg-white dark:bg-[#0e0e13] overflow-hidden" 
      ref={containerRef}
    >
      
      {/* Optimized background - only show on desktop and when dark mode is active */}
      {isDarkMode && !prefersReducedMotion && (
        <motion.div 
          className="hidden lg:block absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Background />
        </motion.div>
      )}

      {/* Simplified bottom fade gradient */}
      <div className="hidden lg:dark:block absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0e0e13] via-[#0e0e13]/80 to-transparent z-10" />

      <motion.div
        style={motionStyles}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1" ref={textRef}>
            <motion.div variants={containerVariants}>
              {/* Typewriter greeting */}
              <motion.div
                className="mb-4"
                variants={fadeUpVariant}
              >
                {showTypewriter && (
                  <TypewriterText
                    text="Hi, I'm Suman Tachamo"
                    delay={0}
                    className="inline-block text-lg sm:text-xl md:text-2xl font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase"
                    onComplete={() => setShowMainHeading(true)}
                  />
                )}
              </motion.div>

              {/* Enhanced main heading with letter-by-letter reveal */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
                variants={fadeUpVariant}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                {showMainHeading && (
                  <>
                    <WordReveal 
                      text="Crafting Digital" 
                      delay={0}
                      className="block"
                    />
                    <div className="relative inline-block mt-2">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 0.6,
                          type: "spring",
                          stiffness: 120,
                          damping: 14
                        }}
                      >
                        <GradientHighlightText delay={800}>
                          <motion.span
                            initial={{ backgroundPosition: "0% 50%" }}
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ 
                              duration: 2,
                              delay: 1,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="bg-gradient-to-r from-indigo-600 via-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent"
                            style={{ backgroundSize: '300% 300%' }}
                          >
                            Experiences
                          </motion.span>
                        </GradientHighlightText>
                      </motion.div>
                    </div>
                  </>
                )}
              </motion.h1>

              {/* Enhanced Description with word-by-word reveal */}
              {showDescription && (
                <DescriptionReveal
                  text="I create beautiful, responsive, and user-friendly web experiences with clean code and modern technologies that bring your vision to life."
                  delay={0}
                  className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mt-4 sm:mt-6"
                  isVisible={showDescription}
                />
              )}

              {/* Optimized buttons */}
              <motion.div
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
                variants={fadeUpVariant}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              >
                <motion.button
                  onClick={() => scrollToSection('projects')}
                  className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-2xl flex items-center justify-center relative overflow-hidden"
                  whileHover={prefersReducedMotion ? {} : { 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(79, 70, 229, 0.3)"
                  }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: false }}
                >
                  <span className="relative z-10">View My Work</span>
                  <motion.svg 
                    className="ml-2 w-5 h-5 relative z-10" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={prefersReducedMotion ? {} : { x: [0, 3, 0] }}
                    transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </motion.button>

                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="group w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-700/80 text-gray-900 dark:text-white font-medium rounded-xl border border-gray-300/50 dark:border-gray-700/50 transition-all duration-300 text-center shadow-lg hover:shadow-2xl relative overflow-hidden"
                  whileHover={prefersReducedMotion ? {} : { 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: false }}
                >
                  <span className="relative z-10">Contact Me</span>
                </motion.button>
              </motion.div>

              {/* Optimized social links */}
              <motion.div
                className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8"
                variants={fadeInVariant}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.4}}
              >
                <motion.span 
                  className="text-sm text-gray-500 dark:text-gray-400"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: false }}
                >
                  Follow me:
                </motion.span>
                <div className="flex space-x-2">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.icon}
                      href={social.url}
                      className={`text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 relative p-2 rounded-full`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={prefersReducedMotion ? {} : { 
                        scale: 1.2,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: false }}
                    >
                      <SocialIcon type={social.icon} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Optimized mobile scroll indicator */}
              <motion.div
                className="w-full flex flex-col items-center justify-center mt-8 sm:mt-12 lg:hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: false }}
              >
                <motion.span 
                  className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 text-center"
                  animate={prefersReducedMotion ? {} : { opacity: [0.5, 1, 0.5] }}
                  transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity }}
                >
                  Scroll Down
                </motion.span>
                <motion.div
                  className="w-8 h-12 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-2 relative overflow-hidden"
                  animate={prefersReducedMotion ? {} : { y: [0, 5, 0] }}
                  transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"
                    animate={prefersReducedMotion ? {} : { y: [0, 15, 0] }}
                    transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Optimized Image Content */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Simplified background elements for better performance */}
              {!prefersReducedMotion && (
                <>
                  <motion.div
                    className="absolute -top-4 -left-4 w-full h-full rounded-full bg-indigo-600/10 dark:bg-indigo-600/20"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                    style={{ willChange: 'transform' }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -right-4 w-full h-full rounded-full bg-purple-600/10 dark:bg-purple-600/20"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                    style={{ willChange: 'transform' }}
                  />
                </>
              )}
              
              {/* Main image container with simplified effects */}
              <motion.div 
                className="relative overflow-hidden rounded-full border-4 border-white/20 dark:border-gray-800/50 shadow-2xl backdrop-blur-sm w-full h-full"
                whileHover={prefersReducedMotion ? {} : { 
                  scale: 1.03, 
                }}
                transition={{ duration: 0.4 }}
                style={{ 
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                }}
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Developer Portrait"
                  className="w-full h-full object-cover object-center"
                  initial={{ scale: 1.1, filter: 'grayscale(50%)' }}
                  animate={{ scale: 1, filter: 'grayscale(0%)' }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-transparent to-purple-600/20 rounded-full opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Optimized desktop scroll indicator */}
      <motion.div
        className="hidden lg:flex flex-col items-center absolute left-1/2 transform -translate-x-1/2 bottom-8 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      >
        <motion.span 
          className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center"
          animate={prefersReducedMotion ? {} : { opacity: [0.5, 1, 0.5] }}
          transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity }}
        >
          Scroll Down
        </motion.span>
        <motion.div
          className="w-8 h-12 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-2 relative overflow-hidden backdrop-blur-sm"
          animate={prefersReducedMotion ? {} : { y: [0, 5, 0] }}
          transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-2 h-2 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"
            animate={prefersReducedMotion ? {} : { y: [0, 15, 0] }}
            transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity, delay: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
