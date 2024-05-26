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
  const router = useRouter();

  return (
    <div className="flex items-center ">
      <div className="relative group min-w-[170px]">
        <button
          className="inline-flex justify-between w-full px-4 py-2 text-sm  text-gray-700 border-2 border-gray-300 bg-white rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="mr-2 capitalize">{value ? value : placeholder}</span>
          <Image src="/assets/chevron.svg" width={20} height={20} alt={''} />
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full absolute right-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1`}
        >
          {options.map((option) => (
            <Link
              key={option}
              className="pointer block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md capitalize"
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
