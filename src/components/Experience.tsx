import React from 'react';
import { motion } from 'motion/react';

const experiences = [
  {
    company: 'Fisk University CS Club',
    role: 'President',
    period: '2023 - Present',
    description: 'Organized events, boosted club membership, and led technical workshops for students interested in computer science.',
  },
  {
    company: 'Fisk University',
    role: 'Mathematics Tutor',
    period: '2022 - Present',
    description: 'Assisted fellow students in mastering mathematical concepts, improving their academic performance and confidence.',
  },
  {
    company: 'Independent Projects',
    role: 'Software Developer',
    period: '2021 - Present',
    description: 'Developed various software solutions including a search engine, fitness tracker, and interactive games using Python and JavaScript.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="mb-20">
        <h2 className="mb-4">Professional <span className="text-zinc-400">Journey.</span></h2>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
          A timeline of my professional career, highlighting key roles and achievements.
        </p>
      </div>

      <div className="space-y-16">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16"
          >
            <div className="text-sm font-mono text-zinc-400 pt-1">
              {exp.period}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold">{exp.company}</h3>
                <div className="h-px flex-1 bg-black/5 dark:bg-white/10" />
              </div>
              <p className="text-lg font-semibold text-primary mb-6">{exp.role}</p>
              <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
