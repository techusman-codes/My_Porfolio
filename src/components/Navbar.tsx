"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-widest text-black dark:text-white hover:opacity-80 transition-opacity">
          UceeCodes
        </Link>

        {/* Center Pill */}
        <div className="hidden md:flex h-[58px] items-center gap-2 rounded-2xl bg-white/80 dark:bg-white/5 px-2 border border-black/10 dark:border-white/10 backdrop-blur-lg shadow-sm">
          {[
            { icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, href: "#" },
            { icon: <FaGithub size={22} />, href: "https://github.com/Ugarba202" },
            { icon: <FaLinkedinIn size={22} />, href: "https://www.linkedin.com/in/usman-umar-garba/" },
            { icon: <FaTwitter size={22} />, href: "https://x.com/dev_useee" },
            { icon: <Mail size={22} />, href: "mailto:ugarba202@gmail.com" },
          ].map((item, i) => (
            <a key={i} href={item.href} target={item.href !== "#" ? "_blank" : undefined} rel="noopener noreferrer" className="flex aspect-square items-center justify-center rounded-xl w-[42px] text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all">
              {item.icon}
            </a>
          ))}
          <div className="w-[1px] h-6 bg-gray-300 dark:bg-white/10 mx-2"></div>
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex aspect-square items-center justify-center rounded-xl w-[42px] text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all"
            aria-label="Toggle Theme"
          >
            {mounted && (theme === "dark" ? <Sun size={22} /> : <Moon size={22} />)}
          </button>
        </div>

        {/* Right Contact Button */}
        <a href="#contact" className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
          Contact Me 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    </nav>
  );
}