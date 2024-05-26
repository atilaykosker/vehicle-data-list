import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { createUrlWithNewParam } from '@/helpers/createUrlWithQuery';

type Props = {
  options: Array<string | null>;
  value: string | null;
  placeholder: string;
};
const Dropdown: React.FC<Props> = ({ options, value, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex items-center '>
      <div className='group relative min-w-[170px]'>
        <button
          className='inline-flex w-full justify-between rounded-lg border-2 border-gray-300  bg-white px-4 py-2 text-sm text-gray-700'
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className='mr-2 capitalize'>{value ? value : placeholder}</span>
          <Image src='/assets/chevron.svg' width={20} height={20} alt={''} />
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute right-0 mt-1 w-full space-y-1 rounded-md bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5`}
        >
          {options.map((option) => (
            <Link
              key={option}
              className='pointer block cursor-pointer rounded-md px-4 py-2 capitalize text-gray-700 hover:bg-gray-100 active:bg-blue-100'
              onClick={() => {
                setIsOpen(false);
              }}
              href={`${createUrlWithNewParam({
                vehicle_type: option,
              })}`}
            >
              {option === null ? 'All' : option}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
