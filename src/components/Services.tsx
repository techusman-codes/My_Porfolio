"use client";

import { Monitor, Smartphone, Database } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Mobile App Development",
      subtitle: "Flutter & Dart",
      description: "Building cross-platform mobile applications with clean interfaces, reliable state management, API integration, and maintainable architecture.",
      icon: <Smartphone size={32} className="text-black dark:text-gray-800" />,
      tags: ["Flutter", "Dart", "iOS", "Android", "State Management"]
    },
    {
      title: "Frontend Development",
      subtitle: "React / Next.js",
      description: "Building responsive web interfaces and product experiences with a focus on usability, performance, and clean implementation.",
      icon: <Monitor size={32} className="text-black dark:text-gray-800" />,
      tags: ["React", "Next.js", "TypeScript", "TailwindCSS"]
    },
    {
      title: "Backend Development",
      subtitle: "Python / Go / Rust",
      description: "Building and integrating APIs and backend services, with growing focus on reliable financial and Bitcoin-related systems.",
      icon: <Database size={32} className="text-black dark:text-gray-800" />,
      tags: ["Python", "Go", "Rust", "APIs", "Bitcoin"]
    }
  ];

  return (
    <section id="services" className="pt-10 pb-20 md:pt-16 md:pb-32">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-16">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col p-8 rounded-[2rem] bg-white dark:bg-[#151b2b] border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-white flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-2">{service.title}</h3>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">{service.subtitle}</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10 flex-grow">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-4 py-2 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}