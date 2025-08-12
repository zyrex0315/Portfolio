import React from "react";
import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useMotionValue, useTransform, useInView } from 'framer-motion';
import { Briefcase, Calendar, Code, ExternalLink, GraduationCap, MapPin, Sparkles, Zap } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const tabList = [
  { id: "experience", label: "Experience", icon: <Briefcase className="w-5 h-5 mr-2" /> },
  { id: "education", label: "Education", icon: <GraduationCap className="w-5 h-5 mr-2" /> }
];

// Horizontal Scrolling Skills Component
const ScrollingSkills = React.memo(() => {
  const skills = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Tailwind CSS", icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Photoshop", icon: "https://img.icons8.com/?size=100&id=NeNPFdj7MzXi&format=png&color=000000" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" }
  ];

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="w-full overflow-hidden py-6 my-8">
      <motion.div
        className="flex space-x-6"
        animate={{
          x: [0, -50 * skills.length * 3]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center whitespace-nowrap px-6 py-4 min-w-max"
            whileHover={{ 
              scale: 1.05,
              y: -2,
              transition: { duration: 0.2 }
            }}
          >
            <div className="w-8 h-8 mr-3 flex items-center justify-center">
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium text-lg">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
});

export default function Skills() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false,
    amount: 0.1
  });
  
  const [activeTab, setActiveTab] = useState("experience");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Education Data
  const educationData = [
    {
      degree: "+2 in Computer Science",
      institution: "Khwopa College",
      location: "Bhaktapur, Nepal",
      period: "2019 - 2021",
      description: "Completed college education with focus on computer science fundamentals, programming basics, and information technology concepts.",
      courses: ["Computer Science", "Programming", "Mathematics", "Information Technology"],
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJWxxbmr8ayZY5E0dF0hQPy5MSQBtTjzYGA&s"
    },
    {
      degree: "Bachelor in Computer and Information System",
      institution: "Crimson College of Technology",
      location: "Butwal, Nepal",
      period: "2021 - Present",
      description: "Currently pursuing a comprehensive degree in computer and information systems, focusing on modern software development, database management, and information technology fundamentals.",
      courses: ["Programming Fundamentals", "Database Management", "Information Systems", "Web Development"],
      logo: "https://api.wdnexus.com/media/company/avatar/2023/08/25/Logo.png"
    }
  ];

  // Experience Data
  const experienceData = [
    {
      position: "Data Specialist",
      company: "Cloudfactory",
      location: "Remote",
      period: "2023 - Present",
      description: "Specialized in data processing, analysis, and management for cloud-based solutions. Working with large datasets and implementing data quality assurance processes.",
      achievements: [
        "Processed and analyzed large-scale datasets efficiently",
        "Implemented data quality control measures",
        "Collaborated with cross-functional teams on data-driven projects"
      ],
      technologies: ["Data Analysis", "Data Processing", "Quality Assurance", "Cloud Platforms"],
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTohJ9vQ6V90juXPI7Itzg9nTmk3hn7WlnS9g&s"
    },
    {
      position: "Fullstack Developer ( Intern )",
      company: "SynthBit Group Pvt. Ltd.",
      location: "On-Site",
      period: "June 2025 - Present",
      description: "Working on full-stack development projects, gaining hands-on experience with modern web technologies and contributing to real-world applications.",
      achievements: [
        "Developing full-stack web applications",
        "Learning modern development frameworks and tools",
        "Collaborating with development teams on various projects"
      ],
      technologies: ["React", "Node.js", "JavaScript", "Full-stack Development"],
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5WvwErogm9qxUvWNn7FRO9lBQKCMjJH0Fw&s"
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.8, rotateX: -45 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.8, 
        type: 'spring', 
        bounce: 0.4,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  const [prevTab, setPrevTab] = useState("experience");
  const [direction, setDirection] = useState(0); 
  const [bgStyle, setBgStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef([]);

  useEffect(() => {
    const idx = tabList.findIndex(tab => tab.id === activeTab);
    if (tabRefs.current[idx]) {
      const node = tabRefs.current[idx];
      setBgStyle({
        left: node.offsetLeft,
        width: node.offsetWidth
      });
    }
  }, [activeTab, tabList]);

  const handleTabClick = (id) => {
    const prevIdx = tabList.findIndex(tab => tab.id === activeTab);
    const nextIdx = tabList.findIndex(tab => tab.id === id);
    setDirection(nextIdx > prevIdx ? 1 : -1);
    setPrevTab(activeTab);
    setActiveTab(id);
  };

  return (
    <section id="skills" className="relative py-10 sm:py-16 md:py-28 min-h-screen flex flex-col justify-center bg-white dark:bg-[#0e0e13] overflow-hidden">
      {/* Minimal Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient orb */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-600/5 to-purple-600/5 dark:from-indigo-600/3 dark:to-purple-600/3 rounded-full filter blur-3xl" />
      </div>
    
      <div className="container mx-auto px-2 sm:px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-4"
            animate={inView ? {
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              backgroundSize: "200% 100%",
            }}
          >
            Skills & Experience
          </motion.h2>
          <motion.p 
            className="mt-2 sm:mt-4 text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A comprehensive overview of my technical skills, educational background, and professional experience.
          </motion.p>
        </motion.div>

        {/* Horizontal Scrolling Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 sm:mb-16"
        >
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.h3 
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Technical Skills
            </motion.h3>
            
          </motion.div>
          <ScrollingSkills />
        </motion.div>

        {/* Enhanced Tabs Navigation for Education & Experience */}
        <div className="flex justify-center mb-6 sm:mb-12">
          <motion.div 
            className="relative bg-white/80 dark:bg-[#181926]/80 backdrop-blur-md rounded-full p-1 border border-gray-200 dark:border-gray-700 shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center space-x-0.5 sm:space-x-1 relative" style={{ minHeight: 44 }}>
              <motion.span
                className="absolute z-0"
                animate={{
                  left: bgStyle.left,
                  width: bgStyle.width,
                  top: 0,
                  height: '100%',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #4f46e5, #7c3aed, #ec4899)',
                  boxShadow: '0 4px 24px 0 rgba(99,102,241,0.15)',
                }}
                transition={{ 
                  type: "spring",
                  bounce: 0.25,
                  duration: 0.6 
                }}
                style={{ position: 'absolute' }}
              />
              {tabList.map((tab, i) => (
                <motion.button
                  key={tab.id}
                  ref={el => tabRefs.current[i] = el}
                  onClick={() => handleTabClick(tab.id)}
                  className={`relative px-3 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2 z-10 ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                  style={{ minWidth: 80 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    animate={activeTab === tab.id ? { rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {tab.icon}
                  </motion.span>
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education & Experience Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100, rotateY: direction > 0 ? 15 : -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100, rotateY: direction > 0 ? -15 : 15 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
            >
              <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900/40 rounded-2xl p-6 md:p-10 border border-indigo-200 dark:border-indigo-400/20 divide-y divide-gray-200 dark:divide-indigo-400/10 backdrop-blur-sm">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {educationData.map((edu, idx) => (
                    <motion.div
                      key={edu.institution}
                      variants={itemVariants}
                      className="flex items-start gap-5 py-6 first:pt-0 last:pb-0 group"
                      whileHover={{ x: 10, transition: { duration: 0.3 } }}
                    >
                      <motion.div 
                        className="w-14 h-14 flex items-center justify-center bg-indigo-100 dark:bg-indigo-600/10 rounded-xl flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ 
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.4 }
                        }}
                      >
                        <img src={edu.logo} alt={edu.institution} className="w-11 h-11 object-contain rounded-xl" />
                      </motion.div>
                      <div className="flex-1">
                        <motion.div 
                          className="font-bold text-gray-900 dark:text-white text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
                          layoutId={`edu-title-${idx}`}
                        >
                          {edu.degree}
                        </motion.div>
                        <div className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mt-1">{edu.period}</div>
                        <div className="text-indigo-500 dark:text-indigo-300 text-sm font-semibold mt-1">{edu.institution}</div>
                        <motion.div 
                          className="text-gray-700 dark:text-white/70 text-xs mt-2 mb-1"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {edu.description}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}

          {activeTab === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100, rotateY: direction > 0 ? 15 : -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100, rotateY: direction > 0 ? -15 : 15 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
            >
              <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900/40 rounded-2xl p-6 md:p-10 border border-purple-200 dark:border-purple-400/20 space-y-6 backdrop-blur-sm">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {experienceData.map((exp, idx) => (
                    <motion.div
                      key={exp.company}
                      variants={itemVariants}
                      className="flex items-start gap-4 py-4 group"
                      whileHover={{ x: 10, transition: { duration: 0.3 } }}
                    >
                      <motion.span 
                        className="w-12 h-12 flex items-center justify-center bg-purple-100 dark:bg-purple-600/10 rounded-lg flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ 
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.4 }
                        }}
                      >
                        <img src={exp.logo} alt={exp.company} className="w-9 h-9 object-cover rounded-lg" />
                      </motion.span>
                      <div className="flex-1">
                        <motion.div 
                          className="font-bold text-gray-900 dark:text-white text-base group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
                          layoutId={`exp-title-${idx}`}
                        >
                          {exp.position}
                        </motion.div>
                        <div className="text-purple-600 dark:text-purple-400 text-sm font-medium">{exp.company} &middot; {exp.period}</div>
                        <motion.div 
                          className="text-gray-700 dark:text-white/70 text-xs mt-2 mb-1"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1 }}
                        >
                          {exp.description}
                        </motion.div>
                        <motion.ul className="text-gray-700 dark:text-white/70 text-xs mt-1 list-disc list-inside space-y-1">
                          {exp.achievements.slice(0,2).map((ach, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0.7, x: -5 }}
                              whileHover={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {ach}
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
