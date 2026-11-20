import {
  Network,
  MessageSquare,
  Users,
  BarChart3,
  Search,
  Dumbbell,
  type LucideIcon,
} from 'lucide-react';

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

// Ordered by importance. Descriptions and numbers come from Netra's resume where available.
export const projects: Project[] = [
  {
    title: 'CollabNext',
    description:
      'A knowledge graph built with Georgia Tech professors and supported by the NSF TIP Directorate, increasing visibility for HBCUs and emerging researchers. Full-stack React and Flask app serving 500+ users.',
    icon: Network,
    gradient: 'from-sky-500 to-indigo-600',
    tags: ['React', 'Flask', 'Knowledge Graph', 'NSF'],
    liveUrl: 'https://collabnext.io',
  },
  {
    title: 'ChatApp',
    description:
      'Real-time chat application built on the MERN stack with Socket.io, supporting 100+ concurrent users with low latency and a responsive interface.',
    icon: MessageSquare,
    gradient: 'from-rose-500 to-pink-600',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/nyaupane-netra/chat-app',
  },
  {
    title: 'FiskBook',
    description:
      'Web app that connects students with opportunities, alumni, and experts. Built at the Google HBCU Hackathon with Firebase, where it earned an Honorable Mention.',
    icon: Users,
    gradient: 'from-violet-500 to-fuchsia-600',
    tags: ['React', 'Firebase', 'Hackathon', 'Honorable Mention'],
    githubUrl: 'https://github.com/nyaupane-netra/FiskBook',
  },
  {
    title: 'Data for Good Hackathon',
    description:
      'With a team of 4, built a data-driven solution for a nonprofit: a ranking algorithm that picks neighborhoods for expansion and improved their predictive model accuracy by 25%.',
    icon: BarChart3,
    gradient: 'from-blue-700 to-slate-800',
    tags: ['Python', 'SQL', 'Tableau', 'JPMorgan Chase'],
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
    gradient: 'from-orange-500 to-amber-500',
    tags: ['Python', 'Health', 'Tracking'],
    githubUrl: 'https://github.com/nyaupane-netra/FitnessTrack',
  },
];
