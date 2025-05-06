import { Job } from './JobBoard';

export const MOCK_JOBS: Job[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    postedDate: '2025-03-15',
    description:
      'We are looking for an experienced Frontend Developer to join our team. You will be responsible for building and maintaining user interfaces for our web applications...',
    tags: [
      { label: 'React', bgColor: 'bg-blue-100', textColor: 'text-blue-800' },
      {
        label: 'TypeScript',
        bgColor: 'bg-green-100',
        textColor: 'text-green-800',
      },
      {
        label: 'Next.js',
        bgColor: 'bg-purple-100',
        textColor: 'text-purple-800',
      },
    ],
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'CloudScale Systems',
    location: 'New York, NY',
    postedDate: '2025-05-7',
    description:
      'Join our backend team to build scalable microservices and APIs using modern technologies. You will work on designing and implementing high-performance systems...',
    tags: [
      {
        label: 'Node.js',
        bgColor: 'bg-green-100',
        textColor: 'text-green-800',
      },
      {
        label: 'PostgreSQL',
        bgColor: 'bg-blue-100',
        textColor: 'text-blue-800',
      },
      {
        label: 'Docker',
        bgColor: 'bg-purple-100',
        textColor: 'text-purple-800',
      },
    ],
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'InnovateTech Labs',
    location: 'Remote',
    postedDate: '2025-04-30',
    description:
      'Looking for a versatile developer who can work across the entire stack and bring ideas to life. You will collaborate with cross-functional teams to deliver end-to-end solutions...',
    tags: [
      { label: 'React', bgColor: 'bg-blue-100', textColor: 'text-blue-800' },
      {
        label: 'Node.js',
        bgColor: 'bg-green-100',
        textColor: 'text-green-800',
      },
      {
        label: 'MongoDB',
        bgColor: 'bg-yellow-100',
        textColor: 'text-yellow-800',
      },
    ],
  },
];
