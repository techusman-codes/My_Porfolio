"use client";

import Image from "next/image";

export default function Skills() {
  const allSkills = [
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
  ];

  // Split skills into two rows for the double marquee effect
  const half = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, half);
  const row2 = allSkills.slice(half);

  const SkillCard = ({ skill }: { skill: any }) => (
    <div className="flex-shrink-0 w-[110px] h-[130px] md:w-[130px] md:h-[150px] flex flex-col items-center justify-center p-4 bg-white dark:bg-[#151b2b] rounded-3xl border border-gray-200 dark:border-white/5 hover:-translate-y-1 transition-transform duration-300">
      <div className="relative w-10 h-10 md:w-12 md:h-12 mb-3">
        <Image src={skill.icon} alt={skill.name} fill className="object-contain" />
      </div>
      <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{skill.name}</span>
    </div>
  );

  return (
    <section id="skills" className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white">
          My Programming Languages and Frameworks
        </h2>
      </div>

      <div className="relative w-full flex flex-col gap-4 overflow-hidden">
        {/* Fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-white dark:from-[#0a0f1f] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-white dark:from-[#0a0f1f] to-transparent z-10 pointer-events-none"></div>

        {/* Row 1 - Scrolls left */}
        <div className="flex gap-4 md:gap-6 animate-scroll pause-on-hover w-max">
          {[...row1, ...row1, ...row1].map((skill, index) => (
            <SkillCard key={`row1-${index}`} skill={skill} />
          ))}
        </div>

        {/* Row 2 - Scrolls right */}
        <div className="flex gap-4 md:gap-6 animate-scroll-reverse pause-on-hover w-max ml-[-100px]">
          {[...row2, ...row2, ...row2].map((skill, index) => (
            <SkillCard key={`row2-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}