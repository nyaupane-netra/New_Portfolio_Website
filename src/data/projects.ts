import {
  Network,
  TrendingUp,
  Landmark,
  CalendarCheck,
  MessageSquare,
  Users,
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

// Ordered by importance. Descriptions come from the GitHub repos and Netra's resume.
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
    title: 'Marketly',
    description:
      'Stock tracking app for following real-time prices, setting personalized alerts, and exploring detailed company insights.',
    icon: TrendingUp,
    gradient: 'from-emerald-500 to-teal-600',
    tags: ['Next.js', 'TypeScript', 'Stock Market'],
    githubUrl: 'https://github.com/nyaupane-netra/marketly_stock-tracker-app',
  },
  {
    title: 'Lumina',
    description:
      'AI-powered app that recognizes a place and gives you a detailed description of the landmark.',
    icon: Landmark,
    gradient: 'from-amber-500 to-orange-600',
    tags: ['TypeScript', 'AI', 'Computer Vision'],
    githubUrl: 'https://github.com/nyaupane-netra/Lumina-App',
  },
  {
    title: 'Salon Booking System',
    description: 'Full-stack salon booking application built as a set of microservices.',
    icon: CalendarCheck,
    gradient: 'from-fuchsia-500 to-purple-600',
    tags: ['JavaScript', 'Microservices', 'Full-Stack'],
    githubUrl: 'https://github.com/nyaupane-netra/salon-booking-system',
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
    gradient: 'from-violet-500 to-blue-600',
    tags: ['React', 'Firebase', 'Hackathon', 'Honorable Mention'],
    githubUrl: 'https://github.com/nyaupane-netra/FiskBook',
  },
];
