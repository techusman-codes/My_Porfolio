"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="order-2 lg:order-1 flex flex-col items-start z-10">
          <div className="flex items-center gap-2 text-[#00E599] text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E599] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E599]"></span>
            </span>
            Available for work
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl text-black dark:text-white leading-[1.1] mb-6 tracking-tight">
            <span className="font-normal">I'm Usman Umar Garba</span><br />
            <span className="font-normal">I build </span>
            <span className="font-bold">mobile and web applications.</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-xl mb-10 leading-relaxed font-light">
            Mobile and Frontend Engineer building practical products with Flutter, modern web technologies, and backend systems. I also work in Bitcoin and Lightning, with a focus on reliable financial applications and open-source engineering.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg bg-white text-black font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
              View Resume
            </a>
            <a href="#projects" className="px-6 py-3 rounded-lg bg-transparent text-black dark:text-white font-medium border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center gap-2">
              View Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end z-10">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-dashed border-gray-300 dark:border-gray-700 p-2">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800">
              <Image 
                src="/images/ucee.jpeg" 
                alt="Usman Umar Garba" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}