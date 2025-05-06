import React from 'react';
import { Search } from 'lucide-react';
import { JOB_BOARD_DATA } from '@/constants/JobBoard';

const SearchFilterBar = () => {
  const { placeholder, categories, experienceLevels } = JOB_BOARD_DATA.searchBar;
  
  return (
    <div className='flex flex-col lg:flex-row gap-4 bg-gray-50 dark:bg-gray-900/40 backdrop-blur-lg rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-800/20'>
      <div className='flex-1 relative'>
        <input
          type='text'
          placeholder={placeholder}
          className='w-full px-4 py-3.5 pl-12 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/20 placeholder-gray-500 focus:ring-2 focus:ring-blue-500/20 transition-all'
        />
        <Search className='absolute left-4 top-4 h-5 w-5 ' />
      </div>
      <div className='flex gap-4'>
        <select className='px-4 py-3.5 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/20 text-brandLight dark:text-brandDark cursor-pointer focus:ring-2 focus:ring-blue-500/20 min-w-[180px] transition-all'>
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
        <select className='px-4 py-3.5 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/20 text-brandLight dark:text-brandDark cursor-pointer focus:ring-2 focus:ring-blue-500/20 min-w-[180px] transition-all'>
          {experienceLevels.map((level) => (
            <option key={level.value} value={level.value}>
              {level.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchFilterBar;