"use client";

import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-gray-200 dark:border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-600 dark:text-gray-400 mb-12">
          <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-black dark:hover:text-white transition-colors">Services</a>
          <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-black dark:text-white mb-12">
          Connect With Me
        </h2>

        {/* Social Icons */}
        <div className="flex items-center gap-6 mb-16">
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://github.com/Ugarba202" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://x.com/dev_useee" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.linkedin.com/in/usman-umar-garba/" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <FaLinkedinIn size={24} />
          </a>
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <FaTiktok size={24} />
          </a>
          <a href="mailto:ugarba202@gmail.com" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Usman Umar Garba. All rights reserved.
        </p>

      </div>
    </footer>
  );
}