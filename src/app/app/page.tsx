import JobBoard from '@/components/App/JobBoard/Index';
import React from 'react';

const page = () => {
  return (
    <div className='min-h-[66dvh]'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 min-h-[66dvh]'>
        <JobBoard />
      </div>
    </div>
  );
};

export default page;
