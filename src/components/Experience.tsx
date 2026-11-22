import { motion } from 'motion/react';
import { experiences } from '../data/experience';

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
            key={`${exp.company}-${exp.role}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(idx, 3) * 0.1 }}
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
              <ul className="space-y-3 max-w-3xl">
                {exp.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed"
                  >
                    <span className="mt-3 w-1 h-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
