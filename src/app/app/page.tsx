import JobBoard from '@/components/App/JobBoard/Index';
import React from 'react';

const page = () => {
  return (
    <div className='min-h-[66dvh]'>
      <div className='w-[1240px] max-w-[1240px] min-h-[66dvh]'>
        <JobBoard />
      </div>
    </div>
  );
};

export default page;
