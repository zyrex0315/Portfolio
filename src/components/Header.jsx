import React from "react";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, House, Mail, Menu, Moon, Sun, User, X, Briefcase, Wrench } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home', icon: <House size={16} /> },
  { name: 'About', href: '#about', icon: <User size={16} /> },
  // { name: 'Projects', href: '#projects', icon: <Briefcase size={16} /> },
  // { name: 'Skills', href: '#skills', icon: <Code size={16} /> },
  // { name: 'Services', href: '#services', icon: <Wrench size={16} /> },
  { name: 'Contact', href: '#contact', icon: <Mail size={16} /> },
];

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [scrollDirection, setScrollDirection] = useState("none");
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect mobile view
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Set initial active link based on current scroll position
  useEffect(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < 100) {
      setActiveLink('home');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY && !mobileMenuOpen) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
      
      // Check if scrolled more than threshold
      const isScrolled = currentScrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Update active link based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      // If we're at the very top, set home as active
      if (currentScrollY < 100) {
        current = 'home';
      } else {
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (currentScrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
          }
        });
      }
      
      setActiveLink(prevActiveLink => {
        if (current && current !== prevActiveLink) {
          return current;
        }
        return prevActiveLink;
      });
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, mobileMenuOpen, scrolled]);

  useEffect(() => {
    // Check initial dark mode preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (linkName) => {
    setActiveLink(linkName);
    setMobileMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 dark:bg-[#0e0e13]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      } ${(!isMobile && scrollDirection === "down" && scrolled) ? "-translate-y-full" : "translate-y-0"}`}
      {...(!isMobile
        ? { initial: { y: -100 }, animate: { y: 0 }, transition: { duration: 0.3 } }
        : {})}
    >
      <div className="container mx-auto px-0 sm:px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 sm:h-20 px-2 xs:px-1 sm:px-4 w-full">
          <motion.div 
            className="flex-shrink-0"
            {...(!isMobile
              ? { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.5 } }
              : {})}
          >
            <a href="#home" className="text-base sm:text-lg md:text-xl font-bold relative group truncate max-w-[120px] xs:max-w-[90px] sm:max-w-none">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-indigo-600 transition-all duration-500">
                Suman Tachamo
              </span>
              <span className="relative text-indigo-600 dark:text-indigo-400">
                .
                <motion.span 
                  className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-600 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.span>
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center"
            {...(!isMobile
              ? { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.2 } }
              : {})}
          >
            <div className="relative bg-white/80 dark:bg-[#181926]/80 backdrop-blur-md rounded-full p-1.5 border border-gray-200 dark:border-gray-700 shadow-xl">
              <div className="flex items-center space-x-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.href.substring(1))}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2 ${
                      activeLink === link.href.substring(1)
                        ? 'text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                    }`}
                  >
                    {activeLink === link.href.substring(1) && (
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full -z-10"
                        layoutId="activeNavBackground"
                        transition={{ type: 'spring', duration: 0.6 }}
                      />
                    )}
                    {link.icon}
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.nav>

          <div className="flex items-center space-x-3">
            <motion.button
              onClick={toggleDarkMode}
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors shadow-md hover:shadow-lg"
              aria-label="Toggle dark mode"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 rounded-full md:hidden bg-white dark:bg-gray-800 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors shadow-md hover:shadow-lg"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav 
            id="mobile-nav"
            className="md:hidden bg-white/95 dark:bg-[#0e0e13]/95 backdrop-blur-lg shadow-lg border-t border-gray-200 dark:border-gray-700 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 sm:px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={e => {
                    e.preventDefault();
                    const section = document.getElementById(link.href.substring(1));
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                    setActiveLink(link.href.substring(1));
                    setMobileMenuOpen(false); // Close immediately
                  }}
                  className={`flex items-center gap-3 px-6 py-5 rounded-lg text-base font-medium transition-all duration-200 relative overflow-hidden w-full text-left ${
                    activeLink === link.href.substring(1)
                      ? 'text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  {...(!isMobile
                    ? { whileHover: { x: 5 }, initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -10 } }
                    : {})}
                >
                  {activeLink === link.href.substring(1) && (
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg -z-10"
                      layoutId="activeNavBackgroundMobile"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                  {link.icon}
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
