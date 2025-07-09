import React from "react";
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-6 bg-gray-50 dark:bg-gray-900/40 rounded-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 hidden md:block">
            <a href="#home" className="text-xl font-bold">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Suman
              </span>
              <span className="text-indigo-600 dark:text-indigo-400">.</span>
            </a>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-md">
              Crafting beautiful, responsive web experiences with clean code and modern technologies.
            </p>
          </div>
          
          <div className="hidden md:block">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Skills
                </a>
              </li>
             
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="hidden md:block">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Connect
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://github.com/zyrex0315" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/suman-tachamo" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/suman.tch/" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Instagram
                </a>
              </li>
              <li>
                
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <div className="w-full flex justify-center">
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
              &copy; {currentYear} Suman Tachamo. All rights reserved.
            </p>
          </div>
          
          
        </div>
      </div>
    </footer>
  );
}
