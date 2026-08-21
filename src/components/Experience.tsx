"use client";

import { Briefcase, Monitor, Layers } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Chief Technology Officer",
      company: "Bravpuls Technologies",
      location: "Remote",
      date: "Current",
      description: "Leading the technical direction and software development across company products. Making engineering decisions around architecture, implementation, and delivery. Working with the development team to turn product requirements into maintainable software.",
      tags: ["Technical Leadership", "Architecture", "Software Development"],
      icon: <Monitor size={20} className="text-black" />
    },
    {
      title: "Mobile & Backend Engineer",
      company: "BitSave",
      location: "Remote",
      date: "Current",
      description: "Building and improving mobile and backend components for a Bitcoin-focused financial product. Developing mobile features with Flutter and working with backend services and APIs. Contributing to financial workflows, product integrations, and user-facing functionality.",
      tags: ["Flutter", "Bitcoin", "APIs", "Backend"],
      icon: <Layers size={20} className="text-black" />
    },
    {
      title: "Frontend & Mobile Engineer",
      company: "MenuRants",
      location: "Remote",
      date: "Current",
      description: "Building the frontend and mobile experience for MenuRants, a smart QR ordering platform for restaurants. Developing user-facing interfaces for digital menus and restaurant ordering workflows. Working on responsive product experiences and features around menu availability and ordering.",
      tags: ["Frontend", "Mobile", "UI/UX", "React"],
      icon: <Briefcase size={20} className="text-black" />
    },
    {
      title: "Flutter Developer",
      company: "ABUDevs",
      location: "On-site / Remote",
      date: "January 2024 - November 2024",
      description: "Developed cross-platform mobile applications using Flutter and Dart. Worked on responsive interfaces, application features, API integration, and user experience. Contributed to software projects within the developer community.",
      tags: ["Flutter", "Dart", "Cross-platform", "API Integration"],
      icon: <Monitor size={20} className="text-black" />
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">Work Experience</h2>
          <p className="text-gray-400">My professional journey and the companies I've worked with</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 dark:bg-white/10 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Center Icon */}
                  <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-white dark:bg-[#0a0f1f] border-4 border-gray-100 dark:border-[#151b2b] flex items-center justify-center -translate-x-1/2 z-10">
                    <div className="text-gray-700 dark:text-gray-300">
                      {exp.icon}
                    </div>
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white dark:bg-[#151b2b] p-8 rounded-[2rem] border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-colors">
                      <h3 className="text-xl font-bold text-black dark:text-white mb-1">{exp.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">{exp.company}</p>
                      <p className="text-sm text-gray-500 mb-4">{exp.location}</p>
                      
                      <div className="flex items-start gap-2 mb-6">
                        <span className="text-gray-400 dark:text-gray-500 mt-1">▶</span>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <span key={i} className="text-xs font-medium px-3 py-1.5 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Date (Desktop only absolute position) */}
                  <div className={`hidden md:block absolute top-8 text-sm text-gray-400 ${isEven ? 'left-1/2 pl-12' : 'right-1/2 pr-12'}`}>
                    {exp.date}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}