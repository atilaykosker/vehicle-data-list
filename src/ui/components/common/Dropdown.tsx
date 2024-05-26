import Image from 'next/image';
import { useState } from 'react';

type Props = {
  options: Array<string | null>;
  value: string | null;
  onChange: (value: string | null) => void;
  placeholder: string;
};
const Dropdown: React.FC<Props> = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center ">
      <div className="relative group min-w-[170px]">
        <button
          className="inline-flex justify-between w-full px-4 py-2 text-sm  text-gray-700 border-2 border-gray-300 bg-white rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="mr-2 capitalize">{value === null ? placeholder : value}</span>
          <Image src="/assets/chevron.svg" width={20} height={20} alt={''} />
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute right-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1`}
        >
          {options.map((option) => (
            <p
              key={option}
              className="pointer block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md capitalize"
              onClick={() => {
                setIsOpen(false);
                onChange(option);
              }}
            >
              {option === null ? 'All' : option}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
