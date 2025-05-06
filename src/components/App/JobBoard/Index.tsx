import React from 'react';
import TitleBar from './TitleBar';
import SearchFilterBar from './SearchFilterBar';
import JobsList from './JobsList';

const JobBoard = () => {
  return (
    <div className='flex flex-col gap-8 h-full w-full bg-white dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 lg:p-12 lg:my-12 border border-gray-200 dark:border-gray-800/20 shadow-lg'>
      <TitleBar />
      <SearchFilterBar />
      <JobsList />
    </div>
  );
};

export default JobBoard;
