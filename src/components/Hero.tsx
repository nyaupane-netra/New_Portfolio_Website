import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="section-container">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-sm font-semibold text-primary mb-6 tracking-wide uppercase"
            >
              Computer Science @ Fisk University
            </motion.span>

            <h1 className="text-balance mb-8">
              Building the next generation of <span className="text-zinc-500 dark:text-zinc-400">software solutions.</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 mb-12 max-w-2xl leading-relaxed text-balance">
              I'm Netra Nyaupane. I specialize in Python, Java, and modern web technologies 
               to create impactful digital experiences.
            </p>

            <div className="flex flex-wrap gap-5">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#resume" className="btn-secondary">
                Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
