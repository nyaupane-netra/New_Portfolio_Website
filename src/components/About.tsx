import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { site } from '../data/site';

export default function About() {
  const yearsCoding = Math.max(1, new Date().getFullYear() - site.codingSince);

  const stats = [
    { value: String(projects.length), label: 'Featured Projects' },
    { value: `${yearsCoding}+`, label: 'Years Coding' },
    { value: site.gpa, label: 'GPA (CS Major)' },
    { value: 'Fisk', label: 'University' },
  ];

  return (
    <section id="about" className="bg-white dark:bg-bg-dark">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="mb-12 text-balance">
              Passionate about <span className="text-zinc-400">learning</span> and <span className="text-primary">creating</span> innovative solutions.
            </h2>

            <div className="grid md:grid-cols-2 gap-12 text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
              <p>
                Hello, I am Netra Nyaupane and I am a Student at Fisk University majoring in Computer Science.
                I'm not only passionate about learning but also driven to create innovative software solutions.
              </p>
              <p>
                Proficient in Python, Java, and web development, I've developed projects ranging from interactive games
                to complex web applications. My leadership as President of the Computer Science Club has helped me
                hone my organizational and mentorship skills.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-black/5 dark:border-white/10 mt-16">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h4 className="text-4xl font-bold text-zinc-900 dark:text-white mb-1">{stat.value}</h4>
                  <p className="text-[11px] uppercase tracking-widest font-bold text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
