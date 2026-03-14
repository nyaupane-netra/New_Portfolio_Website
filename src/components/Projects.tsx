import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'CollabNext',
    description: 'Builds a knowledge graph to uplift HBCUs and emerging researchers.',
    image: 'https://picsum.photos/seed/collab/800/600',
    tags: ['React', 'Knowledge Graph', 'HBCU'],
    liveUrl: 'https://collabnext.io',
    githubUrl: '#',
  },
  {
    title: 'FiskBook WebApp',
    description: 'Helps students find opportunities and connect with alumni of their field.',
    image: 'https://picsum.photos/seed/fisk/800/600',
    tags: ['Web App', 'Networking', 'Alumni'],
    liveUrl: '#',
    githubUrl: 'https://github.com/nyaupane-netra/FiskBook',
  },
  {
    title: 'Search Engine',
    description: 'Ranks and displays relevant internet pages based on a given search phrase.',
    image: 'https://picsum.photos/seed/search/800/600',
    tags: ['Algorithms', 'Search', 'Data'],
    liveUrl: '#',
    githubUrl: 'https://github.com/nyaupane-netra/Search-Engine',
  },
  {
    title: 'BlackJack Game',
    description: 'Python-based Blackjack game, showcasing programming skills and interactive gameplay.',
    image: 'https://picsum.photos/seed/cards/800/600',
    tags: ['Python', 'Game Dev', 'Logic'],
    liveUrl: '#',
    githubUrl: 'https://github.com/nyaupane-netra/Black-Jack-Game',
  },
  {
    title: 'Space Game',
    description: 'A simple Space game using JavaScript, HTML, and CSS.',
    image: 'https://picsum.photos/seed/space/800/600',
    tags: ['JavaScript', 'HTML', 'CSS', 'Game'],
    liveUrl: '#',
    githubUrl: 'https://github.com/nyaupane-netra/Space-Game',
  },
  {
    title: 'Fitness Tracker',
    description: 'Helps monitoring the exercises and calories burned.',
    image: 'https://picsum.photos/seed/gym/800/600',
    tags: ['Python', 'Health', 'Tracking'],
    liveUrl: '#',
    githubUrl: 'https://github.com/nyaupane-netra/FitnessTrack',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-zinc-50 dark:bg-zinc-900/30">
      <div className="section-container">
        <div className="mb-20">
          <h2 className="mb-4">Featured <span className="text-zinc-400">Projects.</span></h2>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
            A selection of my recent work, ranging from complex web applications to experimental software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-card overflow-hidden flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-base mb-8 flex-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-6">
                  <a href={project.liveUrl} className="text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors">
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a href={project.githubUrl} className="text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors">
                    GitHub <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
