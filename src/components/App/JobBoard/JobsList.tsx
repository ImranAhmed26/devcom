import React from 'react';
import { JOB_BOARD_DATA } from '@/constants/JobBoard';
import { Job } from '@/constants/JobBoard';
import { getRelativeTime } from '@/lib/helper';

// Temporary mock data for development
const mockJobs: Job[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    postedDate: '2025-03-15',
    description: 'We are looking for an experienced Frontend Developer to join our team...',
    tags: [
      { label: 'React', bgColor: 'bg-blue-100', textColor: 'text-blue-800' },
      { label: 'TypeScript', bgColor: 'bg-green-100', textColor: 'text-green-800' },
      { label: 'Next.js', bgColor: 'bg-purple-100', textColor: 'text-purple-800' }
    ]
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'CloudScale Systems',
    location: 'New York, NY',
    postedDate: '2025-05-7',
    description: 'Join our backend team to build scalable microservices and APIs using modern technologies...',
    tags: [
      { label: 'Node.js', bgColor: 'bg-green-100', textColor: 'text-green-800' },
      { label: 'PostgreSQL', bgColor: 'bg-blue-100', textColor: 'text-blue-800' },
      { label: 'Docker', bgColor: 'bg-purple-100', textColor: 'text-purple-800' }
    ]
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'InnovateTech Labs',
    location: 'Remote',
    postedDate: '2025-04-30',
    description: 'Looking for a versatile developer who can work across the entire stack and bring ideas to life...',
    tags: [
      { label: 'React', bgColor: 'bg-blue-100', textColor: 'text-blue-800' },
      { label: 'Node.js', bgColor: 'bg-green-100', textColor: 'text-green-800' },
      { label: 'MongoDB', bgColor: 'bg-yellow-100', textColor: 'text-yellow-800' }
    ]
  }
];

const JobsList = () => {
  const { buttons } = JOB_BOARD_DATA;
  
  return (
    <div className='grid gap-4 w-[80%] min-w-[800px]'>
      {mockJobs.map((job) => (
        <div
          key={job.id}
          className='group flex flex-col lg:flex-row justify-between items-start gap-6 p-6 bg-gray-50 dark:bg-gray-900/40 backdrop-blur-lg rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800/20 hover:shadow-md hover:bg-white dark:hover:bg-gray-900/60 transition-all'
        >
          <div className='flex-1 space-y-4'>
            <div className='space-y-1'>
              <h2 className='text-xl font-semibold  group-hover:brandLight dark:group-hover: transition-colors'>
                {job.title}
              </h2>
              <div className='flex items-center gap-2 text-sm font-medium text-brandLight dark:text-brandDark'>
                <span>{job.company}</span>
                <span>•</span>
                <span>{job.location}</span>
                <span>•</span>
                <span>{getRelativeTime(job.postedDate)}</span>
              </div>
            </div>
            <p className='text-base leading-relaxed '>
              {job.description}
            </p>
            <div className='flex flex-wrap gap-2'>
              {job.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className='px-3 py-1 bg-white dark:bg-gray-800/50  rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700/20'
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobsList;