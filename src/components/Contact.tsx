"use client";

import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto bg-gray-900 dark:bg-[#151b2b] rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden border border-gray-800 dark:border-white/5">
          {/* Doodle Background Pattern (Simulated with a faint texture or just solid dark for now) */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Bring Your Ideas to Life?</h2>
            <p className="text-gray-300 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Let's collaborate and create something amazing together. Whether it's a web application, mobile app, or Web3 project, I'm here to help turn your vision into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                Get In Touch <ArrowRight size={18} />
              </a>
              <a href="#projects" className="px-8 py-4 rounded-xl bg-transparent border border-white text-white font-semibold hover:bg-white/5 transition-colors">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">Get In Touch</h2>
            <div className="w-16 h-1 bg-gray-900 dark:bg-white mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400">Have a project in mind? Let's discuss how we can work together to bring your ideas to life.</p>
          </div>

          <div className="bg-white dark:bg-[#151b2b] rounded-[2rem] p-8 md:p-12 border border-gray-200 dark:border-white/5">
            <form action="https://formspree.io/f/xqakpzea" method="POST" className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Name *</label>
                  <input type="text" name="name" placeholder="Your name" required className="w-full bg-gray-50 dark:bg-[#1e253c] border border-gray-200 dark:border-transparent focus:border-gray-400 dark:focus:border-white/20 rounded-xl px-5 py-4 text-black dark:text-white outline-none transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Email *</label>
                  <input type="email" name="_replyto" placeholder="your.email@example.com" required className="w-full bg-gray-50 dark:bg-[#1e253c] border border-gray-200 dark:border-transparent focus:border-gray-400 dark:focus:border-white/20 rounded-xl px-5 py-4 text-black dark:text-white outline-none transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Phone Number *</label>
                  <input type="tel" name="phone" placeholder="Your phone number" required className="w-full bg-gray-50 dark:bg-[#1e253c] border border-gray-200 dark:border-transparent focus:border-gray-400 dark:focus:border-white/20 rounded-xl px-5 py-4 text-black dark:text-white outline-none transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Subject *</label>
                  <input type="text" name="subject" placeholder="What's this about?" required className="w-full bg-gray-50 dark:bg-[#1e253c] border border-gray-200 dark:border-transparent focus:border-gray-400 dark:focus:border-white/20 rounded-xl px-5 py-4 text-black dark:text-white outline-none transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Message *</label>
                <textarea name="message" placeholder="Tell me about your project..." rows={5} required className="w-full bg-gray-50 dark:bg-[#1e253c] border border-gray-200 dark:border-transparent focus:border-gray-400 dark:focus:border-white/20 rounded-xl px-5 py-4 text-black dark:text-white outline-none transition-colors resize-y"></textarea>
              </div>
              
              <div className="flex justify-end mt-4">
                <button type="submit" className="px-8 py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center gap-2">
                  Send Message <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}