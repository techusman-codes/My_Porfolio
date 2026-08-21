"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      type: "Mobile App",
      title: "Fintech Mobile App",
      description: "A comprehensive fintech app built with Flutter, integrating Lightning Network for instantaneous Bitcoin payments.",
      tags: ["Flutter", "Dart", "FastAPI", "Bitcoin"],
      liveUrl: "#",
      image: "/images/project1.png"
    },
    {
      type: "Full Stack",
      title: "E-Commerce Platform",
      description: "Fullstack e-commerce platform with real-time inventory and secure payment gateway integrations.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
      liveUrl: "#",
      image: "/images/project2.png"
    },
    {
      type: "Frontend",
      title: "Real Estate Dashboard",
      description: "A data-rich admin dashboard for real estate agents to manage properties and client interactions.",
      tags: ["React", "PostgreSQL", "Supabase", "Tailwind"],
      liveUrl: "#",
      image: "/images/project3.png"
    },
    {
      type: "Mobile App",
      title: "BitSave Financial",
      description: "Bitcoin-focused financial product built with Flutter. Integrating backend services and mobile applications for seamless financial workflows.",
      tags: ["Flutter", "Bitcoin", "APIs", "Backend"],
      liveUrl: "#",
      image: "/images/project1.png"
    },
    {
      type: "Frontend & Mobile",
      title: "MenuRants Platform",
      description: "Smart QR ordering platform for restaurants with digital menus, responsive product experiences, and real-time menu availability.",
      tags: ["Frontend", "Mobile", "UI/UX", "Real-time"],
      liveUrl: "#",
      image: "/images/project2.png"
    },
    {
      type: "Mobile App",
      title: "AreFAN Wallet",
      description: "Mobile application wallet for farmers and rural communities. Production-focused product with attention to reliability and API integration.",
      tags: ["Flutter", "Dart", "Architecture", "Finance"],
      liveUrl: "#",
      image: "/images/project3.png"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
              Featured Projects
            </h2>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-black dark:bg-white rounded-full"></div>
          </div>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mt-2">
            A collection of projects I've built with passion and attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col bg-white dark:bg-[#151b2b] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none group transition-transform hover:-translate-y-1 duration-300">
              
              <div className="relative h-[240px] w-full bg-gray-100 dark:bg-[#1a2133]">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover object-top"
                />
                <div className="absolute top-4 left-4 z-10 bg-black/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md">
                  {project.type}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-[11px] font-medium px-2.5 py-1.5 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-md">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[11px] font-medium px-2.5 py-1.5 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-md">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors mt-auto text-sm"
                >
                  View Project <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}