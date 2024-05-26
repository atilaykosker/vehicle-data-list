import React from 'react';

type Props = {
  page: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<Props> = ({ page, onPageChange }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700">
          Showing <span className="font-semibold text-gray-900">{page}</span> of{' '}
          <span className="font-semibold text-gray-900">100</span> Pages
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={() => page > 1 && onPageChange(page - 1)}
            className="flex items-center justify-center px-3 h-8 text-sm text-white bg-slate-500 rounded-s-lg hover:bg-gray-900"
          >
            Prev
          </button>
          <button
            onClick={() => onPageChange(page + 1)}
            className="flex items-center justify-center px-3 h-8 text-sm text-white bg-slate-500 border-0 border-s border-gray-700 rounded-e-lg hover:bg-gray-900"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
