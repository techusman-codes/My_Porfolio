"use client";

import React from "react";

export default function About() {
  return (
    <section id="about" className="pt-10 pb-10 md:pt-16 md:pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-12">
          About Me
        </h2>
        
        <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg md:text-xl font-sans leading-relaxed text-center md:text-left mb-20">
          <p>
            I am a Mobile and Frontend Engineer focused on building practical, reliable applications. My main experience is with Flutter and Dart for cross-platform mobile development, alongside frontend development and backend engineering.
          </p>
          <p>
            I also work in Bitcoin and Lightning, where I am developing my skills in Rust and Go and learning from real-world open-source projects. I enjoy working across the product stack, from user interfaces and mobile applications to APIs and financial systems.
          </p>
          <p>
            I am currently involved in products across mobile, web, fintech, and Bitcoin. I care about writing maintainable code, understanding the systems I work on, and building software that solves real problems.
          </p>
          <p>
            Bitcoin and Lightning are a major part of my current engineering direction. I am building practical experience with Bitcoin wallets, Lightning payments, UTXOs, Rust, Go, and open-source codebases.
          </p>
          <p>
            I am a Btrust Builders alumnus and have participated in Rust-focused Bitcoin learning. My current interests include Lightning infrastructure, wallet development, Bitcoin developer tools, and contributing to open-source projects.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-6 gap-y-3 border-t border-gray-200 dark:border-white/10 pt-12 md:pt-16 text-base md:text-xl font-bold text-black dark:text-white">
          <span>Flutter & Dart</span>
          <span className="text-gray-300 dark:text-gray-700 text-sm md:text-base">•</span>
          <span>Bitcoin & Lightning</span>
          <span className="text-gray-300 dark:text-gray-700 text-sm md:text-base">•</span>
          <span>Rust & Go</span>
          <span className="text-gray-300 dark:text-gray-700 text-sm md:text-base">•</span>
          <span>Mobile & Web</span>
        </div>
      </div>
    </section>
  );
}