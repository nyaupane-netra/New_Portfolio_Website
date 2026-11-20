import { Network, Users, Search, Dumbbell, type LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Tailwind gradient classes for the card header. */
  gradient: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'CollabNext',
    description: 'Builds a knowledge graph to uplift HBCUs and emerging researchers.',
    icon: Network,
    gradient: 'from-sky-500 to-indigo-600',
    tags: ['React', 'Knowledge Graph', 'HBCU'],
    liveUrl: 'https://collabnext.io',
  },
  {
    title: 'FiskBook WebApp',
    description: 'Helps students find opportunities and connect with alumni of their field.',
    icon: Users,
    gradient: 'from-violet-500 to-fuchsia-600',
    tags: ['Web App', 'Networking', 'Alumni'],
    githubUrl: 'https://github.com/nyaupane-netra/FiskBook',
  },
  {
    title: 'Search Engine',
    description: 'Ranks and displays relevant internet pages based on a given search phrase.',
    icon: Search,
    gradient: 'from-emerald-500 to-teal-600',
    tags: ['Algorithms', 'Search', 'Data'],
    githubUrl: 'https://github.com/nyaupane-netra/Search-Engine',
  },
  {
    title: 'Fitness Tracker',
    description: 'Helps monitoring the exercises and calories burned.',
    icon: Dumbbell,
    gradient: 'from-orange-500 to-rose-600',
    tags: ['Python', 'Health', 'Tracking'],
    githubUrl: 'https://github.com/nyaupane-netra/FitnessTrack',
  },
];
