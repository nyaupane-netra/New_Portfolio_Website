import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

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
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group glass-card overflow-hidden flex flex-col h-full"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                  aria-hidden="true"
                >
                  <Icon
                    size={72}
                    strokeWidth={1.25}
                    className="text-white/90 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
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
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        Live Demo <ExternalLink size={16} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        GitHub <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
