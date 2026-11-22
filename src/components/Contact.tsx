import { motion } from 'motion/react';
import { Mail, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { site } from '../data/site';

const socials = [
  { label: 'GitHub', href: site.github, Icon: Github },
  { label: 'LinkedIn', href: site.linkedin, Icon: Linkedin },
  { label: 'Email', href: `mailto:${site.email}`, Icon: Mail },
];

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="mb-6">Get in <span className="text-zinc-400">touch.</span></h2>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest font-bold text-zinc-400 mb-1">Email</p>
                  <a href={`mailto:${site.email}`} className="text-lg font-semibold hover:text-primary transition-colors break-all">
                    {site.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest font-bold text-zinc-400 mb-1">Location</p>
                  <p className="text-lg font-semibold">{site.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-5">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-primary transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 flex flex-col justify-center gap-6"
          >
            <h3 className="text-2xl font-bold">Let's talk.</h3>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              The quickest way to reach me is email. Tell me a bit about what you have in mind and I'll get back to you.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent('Hello from your portfolio')}`}
                className="btn-primary text-center"
              >
                Email me
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary text-center inline-flex items-center justify-center gap-2"
              >
                Connect on LinkedIn <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
