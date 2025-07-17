import React from "react";
import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Code, ExternalLink, GraduationCap, MapPin } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';



const tabList = [
  { id: "skills", label: "Skills", icon: <Code className="w-5 h-5 mr-2" /> },
  { id: "education", label: "Education", icon: <GraduationCap className="w-5 h-5 mr-2" /> },
  { id: "experience", label: "Experience", icon: <Briefcase className="w-5 h-5 mr-2" /> }
];

export default function Skills() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [activeTab, setActiveTab] = useState("skills");
  const [hoveredItem, setHoveredItem] = useState(null);
  // Removed: const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Skills Data
  const technicalSkills = [
    { 
      category: "Frontend Development",
      skills: [
        { name: "React", level: 72, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "JavaScript", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML5", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "WordPress", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
      ]
    },
    {
      category: "Design & UI",
      skills: [
        { name: "Tailwind CSS", level: 85, icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" },
        { name: "Figma", level: 82, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Photoshop", level: 88, icon: "https://img.icons8.com/?size=100&id=NeNPFdj7MzXi&format=png&color=000000" },
    
      ]
    },
    {
      category: "Tools & Workflow",
      skills: [
        { name: "Git", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "VS Code", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "WordPress", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
      ]
    }
  ];

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
      logo: "https://scontent.fktm4-1.fna.fbcdn.net/v/t39.30808-6/274270926_378062577656666_5863086493208769457_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGnwo-UkhPhyjX5U6oQpv3__pUtoEsJ6fT-lS2gSwnp9PdiVkWuRNLmWuht3ENfgJnjl4_An5L6kq26QLbIgCDI&_nc_ohc=4dKhwlR4aF4Q7kNvwHm8DlF&_nc_oc=Adkj2bBDk0sqCBvhU2MxGwWvVR123dPHV-sq7sS1h_dsuHcy5MSbLaYyDSX8LHy58JU&_nc_zt=23&_nc_ht=scontent.fktm4-1.fna&_nc_gid=QYS9D5tnm0qVZqqgWfrvKw&oh=00_AfTP-qoFA3y0IQr1FAvXdm8QSFqLYHZ9JEa_BMvRmU_kGQ&oe=68792549"
    },
 
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

  const tabVariants = {
    active: {
      color: "#ffffff",
      transition: {
        duration: 0.5
      }
    },
    inactive: {
      color: "#94a3b8",
      transition: {
        duration: 0.5
      }
    }
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: 'spring', bounce: 0.35 }
    }
  };

  const [prevTab, setPrevTab] = useState("skills");
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
    <section id="skills" className="relative py-10 sm:py-16 md:py-28 min-h-screen flex items-center bg-white dark:bg-[#0e0e13]">
     
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600/10 dark:bg-indigo-600/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/10 dark:bg-purple-600/5 rounded-full filter blur-3xl"></div>
      </div>
    
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.03] pointer-events-none"></div>
      
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
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2 sm:mb-4">
          Skills & Experience
          </h2>
          <p className="mt-2 sm:mt-4 text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-3xl mx-auto">
          A comprehensive overview of my technical skills, educational background, and professional experience.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-6 sm:mb-12">
          <div className="relative bg-white/80 dark:bg-[#181926]/80 backdrop-blur-md rounded-full p-1 border border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="flex items-center space-x-0.5 sm:space-x-1 relative" style={{ minHeight: 44 }}>
              <motion.span
                className="absolute z-0"
                animate={{
                  left: bgStyle.left,
                  width: bgStyle.width,
                  top: 0,
                  height: '100%',
                  borderRadius: '9999px',
                  background: 'linear-gradient(to right, #4f46e5, #7c3aed)',
                  boxShadow: '0 4px 24px 0 rgba(99,102,241,0.10)'
                }}
                transition={{ duration: 0.35 }}
                style={{ position: 'absolute' }}
              />
              {tabList.map((tab, i) => (
                <button
                  key={tab.id}
                  ref={el => tabRefs.current[i] = el}
                  onClick={() => handleTabClick(tab.id)}
                  className={`relative px-3 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2 z-10 ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                  style={{ minWidth: 80 }}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-6xl mx-auto p-2 sm:p-4 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  {technicalSkills.map((category, idx) => (
                    <div
                      key={category.category}
                      className={
                        `rounded-2xl p-4 sm:p-6 h-full flex flex-col bg-white dark:bg-gray-900/40 border ` +
                        (idx === 0 ? 'border-pink-200 dark:border-pink-400/40' : idx === 1 ? 'border-indigo-200 dark:border-indigo-400/40' : 'border-purple-200 dark:border-purple-400/40')
                      }
                    >
                      <div className={
                        `text-base sm:text-lg font-bold mb-2 sm:mb-4 ` +
                        (idx === 0 ? 'text-pink-600 dark:text-pink-400' : idx === 1 ? 'text-indigo-600 dark:text-indigo-400' : 'text-purple-600 dark:text-purple-400')
                      }>
                        {category.category}
                      </div>
                      <div className="divide-y divide-gray-200 dark:divide-white/10">
                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {category.skills.map((skill) => (
                            <motion.div
                              key={skill.name}
                              variants={itemVariants}
                              className="flex items-start gap-3 sm:gap-4 py-4 sm:py-5 first:pt-0 last:pb-0"
                            >
                              <div className={
                                `w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl flex-shrink-0 mt-1 ` +
                                (idx === 0 ? 'bg-pink-100 dark:bg-pink-600/10' : idx === 1 ? 'bg-indigo-100 dark:bg-indigo-600/10' : 'bg-purple-100 dark:bg-purple-600/10')
                              }>
                                <img src={skill.icon} alt={skill.name} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                              </div>
                              <div className="flex-1">
                                <div className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{skill.name}</div>
                                <div className={
                                  `text-xs sm:text-sm font-medium mt-1 ` +
                                  (idx === 0 ? 'text-pink-600 dark:text-pink-400' : idx === 1 ? 'text-indigo-600 dark:text-indigo-400' : 'text-purple-600 dark:text-purple-400')
                                }>
                                  Proficiency Level
                                </div>
                                <div className="text-gray-700 dark:text-white/80 text-xs mt-2 mb-1">{skill.level}%</div>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                    ))}
                  </div>
                </div>
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900/40 rounded-2xl p-6 md:p-10 border border-indigo-200 dark:border-indigo-400/20 divide-y divide-gray-200 dark:divide-indigo-400/10">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {educationData.map((edu, idx) => (
                    <motion.div
                      key={edu.institution}
                      variants={itemVariants}
                      className="flex items-start gap-5 py-6 first:pt-0 last:pb-0"
                    >
                      <div className="w-14 h-14 flex items-center justify-center bg-indigo-100 dark:bg-indigo-600/10 rounded-xl flex-shrink-0 mt-1">
                        <img src={edu.logo} alt={edu.institution} className="w-11 h-11 object-contain rounded-xl" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 dark:text-white text-base">{edu.degree}</div>
                        <div className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mt-1">{edu.period}</div>
                        <div className="text-indigo-500 dark:text-indigo-300 text-sm font-semibold mt-1">{edu.institution}</div>
                        <div className="text-gray-700 dark:text-white/70 text-xs mt-2 mb-1">{edu.description}</div>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900/40 rounded-2xl p-6 md:p-10 border border-purple-200 dark:border-purple-400/20 space-y-6">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {experienceData.map((exp, idx) => (
                    <motion.div
                      key={exp.company}
                      variants={itemVariants}
                      className="flex items-start gap-4 py-4"
                    >
                      <span className="w-12 h-12 flex items-center justify-center bg-purple-100 dark:bg-purple-600/10 rounded-lg flex-shrink-0 mt-1">
                        <img src={exp.logo} alt={exp.company} className="w-9 h-9 object-cover rounded-lg" />
                      </span>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 dark:text-white text-base">{exp.position}</div>
                        <div className="text-purple-600 dark:text-purple-400 text-sm font-medium">{exp.company} &middot; {exp.period}</div>
                        <div className="text-gray-700 dark:text-white/70 text-xs mt-2 mb-1">{exp.description}</div>
                        <ul className="text-gray-700 dark:text-white/70 text-xs mt-1 list-disc list-inside space-y-1">
                          {exp.achievements.slice(0,2).map((ach, i) => (
                            <li key={i}>{ach}</li>
                          ))}
                        </ul>
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
