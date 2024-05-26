import Link from 'next/link';
import React from 'react';

import { createUrlWithNewParam } from '@/helpers/createUrlWithQuery';

type Props = {
  page: number;
};

const Pagination: React.FC<Props> = ({ page }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700">
          Showing <span className="font-semibold text-gray-900">{page}</span> of{' '}
          <span className="font-semibold text-gray-900">100</span> Pages
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <Link
            // href={page > 1 ? `?page=${page - 1}` : `?page=${page}`}
            href={`${createUrlWithNewParam({
              page: page > 1 ? page - 1 : page,
            })}`}
            className="flex items-center justify-center px-3 h-8 text-sm text-white bg-slate-500 rounded-s-lg hover:bg-gray-900"
          >
            Prev
          </Link>
          <Link
            href={`${createUrlWithNewParam({
              page: page + 1,
            })}`}
            className="flex items-center justify-center px-3 h-8 text-sm text-white bg-slate-500 border-0 border-s border-gray-700 rounded-e-lg hover:bg-gray-900"
          >
            Next
          </Link>
        </div>
      </div>
    </>
  );
};

export default Pagination;
