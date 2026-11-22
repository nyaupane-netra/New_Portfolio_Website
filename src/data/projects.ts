import {
  Network,
  TrendingUp,
  Brain,
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

// Ordered by importance. Descriptions come from the GitHub repos and Netra's resume,
// and were checked against the code in a repo-by-repo review.
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
      'Full-stack stock tracker with real-time Finnhub market data, user accounts, watchlists, and price alerts delivered by email through scheduled background jobs.',
    icon: TrendingUp,
    gradient: 'from-emerald-500 to-teal-600',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Inngest'],
    githubUrl: 'https://github.com/nyaupane-netra/marketly_stock-tracker-app',
  },
  {
    title: 'Financial Sentiment Analysis',
    description:
      'Fine-tuned BERT classifier for financial text, compared against FinBERT, with Streamlit dashboards, a FastAPI prediction endpoint, tests, and CI.',
    icon: Brain,
    gradient: 'from-amber-500 to-orange-600',
    tags: ['PyTorch', 'NLP', 'FastAPI', 'Streamlit'],
    githubUrl: 'https://github.com/nyaupane-netra/Financial-Sentiment-Analysis',
  },
  {
    title: 'Salon Booking System',
    description:
      'Full-stack salon booking platform built as Spring Boot microservices behind a Spring Cloud Gateway, with Eureka discovery, Keycloak auth, RabbitMQ events, and a React frontend.',
    icon: CalendarCheck,
    gradient: 'from-fuchsia-500 to-purple-600',
    tags: ['Java', 'Spring Cloud', 'Microservices', 'React'],
    githubUrl: 'https://github.com/nyaupane-netra/salon-booking-system',
  },
  {
    title: 'ChatApp',
    description:
      'Real-time chat application on the MERN stack with Socket.io: JWT authentication, one-to-one and group chats, persisted messages, and typing indicators.',
    icon: MessageSquare,
    gradient: 'from-rose-500 to-pink-600',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com/nyaupane-netra/chat-app',
  },
  {
    title: 'FiskBook',
    description:
      'Hackathon project from the Google HBCU Hackathon (Honorable Mention): a React and Firebase Firestore app where students post and browse opportunities and explore an alumni directory.',
    icon: Users,
    gradient: 'from-violet-500 to-blue-600',
    tags: ['React', 'Firebase', 'Firestore', 'Hackathon'],
    githubUrl: 'https://github.com/nyaupane-netra/FiskBook',
  },
];
