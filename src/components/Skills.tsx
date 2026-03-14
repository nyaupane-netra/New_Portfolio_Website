import React from 'react';
import { motion } from 'motion/react';
import { Code2, Server, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code2 className="text-primary" />,
    skills: ['Python', 'Java', 'JavaScript', 'C', 'C++', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks',
    icon: <Server className="text-accent" />,
    skills: ['React', 'Angular', 'Spring', 'Express', 'Node.js'],
  },
  {
    title: 'Core CS',
    icon: <Database className="text-emerald-500" />,
    skills: ['Data Structures', 'Algorithms', 'OOP', 'Multithreading'],
  },
  {
    title: 'Specialties',
    icon: <Wrench className="text-orange-500" />,
    skills: ['Web Dev', 'Data Analysis', 'Automation', 'Performance Optimization'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <div className="mb-20">
        <h2 className="mb-4">Technical <span className="text-zinc-400">Arsenal.</span></h2>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
          A comprehensive overview of the technologies and tools I use to bring ideas to life.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold">{category.title}</h3>
            </div>
            <div className="flex flex-col gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="text-sm font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-2"
                >
                  <div className="w-1 h-1 rounded-full bg-primary" />
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
