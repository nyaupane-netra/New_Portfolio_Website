export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

// Most recent first. Content is taken from Netra's resume.
export const experiences: Experience[] = [
  {
    company: 'Goldman Sachs',
    role: 'Software Engineer',
    period: 'July 2026 – Present',
    highlights: ['Full-time Software Engineer at Goldman Sachs.'],
  },
  {
    company: 'Goldman Sachs',
    role: 'Summer Analyst',
    period: 'June 2025 – August 2025',
    highlights: [
      'Collaborated with engineers to move document management from SharePoint to DocumentLake, improving scalability and removing archival access restrictions for firmwide users.',
      'Built React frontend and Java backend logic for document storage and retrieval, integrating with AI-driven workflows.',
      'Evaluated ElasticSearch for JSON-based queries, identified indexing latency of up to 10 minutes, and recommended optimizations.',
      'Delivered a reusable solution adopted across multiple workflows.',
    ],
  },
  {
    company: 'National Science Foundation',
    role: 'Software Development Intern',
    period: 'March 2024 – Present',
    highlights: [
      'Worked with Georgia Tech professors on CollabNext, an NSF TIP Directorate–supported knowledge graph that increases visibility for HBCUs and emerging researchers.',
      'Built and maintained a full-stack ReactJS and Flask web app for 500+ users, cutting deployment time by 35% and setup time by 30%.',
      'Developed 50+ interactive graph visualizations with the Orb library, improving data analysis efficiency by 40%.',
    ],
  },
  {
    company: 'Fisk Altitude Achievement Missile Team',
    role: 'Research Intern',
    period: 'August 2023 – Present',
    highlights: [
      "Contributed to the Propulsion Team in NASA's University Student Launch Initiative (USLI), working with 8 teammates to represent Fisk among 56 institutions nationwide.",
      'Designed and optimized a rocket model in AutoCAD and OpenRocket, meeting certification and flight requirements through simulation.',
    ],
  },
  {
    company: 'Atlanta University Center Consortium',
    role: 'PFx: Data for Social Impact Mentor',
    period: 'July 2024',
    highlights: [
      'Mentored a team of 5 students to 100% project completion, with presentations on data-driven insights about foster care challenges.',
      'Analyzed 10,000+ NDACAN entries and improved data analysis quality by 30% using Python, R, and Tableau.',
    ],
  },
  {
    company: 'Fisk University',
    role: 'Teaching Assistant',
    period: 'August 2023 – April 2024',
    highlights: [
      'Assisted professors teaching Calculus I and II to 150 students through office hours, grading, and detailed feedback, earning a 95% performance rating.',
    ],
  },
];
