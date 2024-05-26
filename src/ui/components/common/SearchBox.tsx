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
    <div className="relative mx-auto text-gray-600">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        placeholder="Search"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className="absolute right-0 top-0 bottom-0 mr-4 pointer-events-none">
        <Image src="/assets/search.svg" width={16} height={16} alt={''} />
      </button>
    </div>
  );
};

export default SearchBox;
