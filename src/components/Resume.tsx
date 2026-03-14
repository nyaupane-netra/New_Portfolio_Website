import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, ExternalLink } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="bg-white dark:bg-bg-dark">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Curriculum <span className="text-zinc-400">Vitae.</span></h2>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Download my full resume for a detailed look at my experience, education, and certifications.
          </p>

          <div className="glass-card p-12 md:p-20">
            <div className="flex flex-col items-center gap-10">
              <div className="w-24 h-24 rounded-[2rem] bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-primary shadow-inner">
                <FileText size={40} />
              </div>
              
              <div className="space-y-8">
                <h3 className="text-3xl font-bold">Ready to work together?</h3>
                <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed">
                  My resume provides a comprehensive overview of my technical skills and the impact I've delivered throughout my career.
                </p>
                <div className="flex flex-wrap justify-center gap-5">
                  <a 
                    href="https://netra-nyaupane.vercel.app/Files/Netra-Resume.pdf" 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    Download PDF
                  </a>
                  <button className="btn-secondary">
                    View Online
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
