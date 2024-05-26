'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';

type Props = {
  value?: string | null;
  initialValue?: string | null;
  onChange: (value: string) => void;
};

const SearchBox: React.FC<Props> = ({ onChange, value }) => {
  return (
    <div className='flex flex-col items-center sm:items-start'>
      <div className='relative mx-auto text-gray-600'>
        <input
          className='h-10 rounded-lg border-2 border-gray-300 bg-white px-5 pr-16 text-sm focus:outline-none'
          placeholder='Search'
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
        />
        <button className='pointer-events-none absolute bottom-0 right-0 top-0 mr-4'>
          <Image src='/assets/search.svg' width={16} height={16} alt={''} />
        </button>
      </div>
      <label className='text-sm'>Please enter at least 5 characters</label>
    </div>
  );
};

export default SearchBox;
