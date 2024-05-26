'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { createUrlWithNewParam } from '@/helpers/createUrlWithQuery';
import useDebounce from '@/hooks/useDebounce';
import { Dropdown, SearchBox } from '@/ui/components/common';

type Props = {
  selected: string | null;
  options: string[];
};
const Filter: React.FC<Props> = ({ selected, options }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [debouncedSearch, search, setSearch] = useDebounce<string | null>(searchParams.get('search'), 1000);
  useEffect(() => {
    const newUrl = createUrlWithNewParam({ search: debouncedSearch });
    router.push(newUrl);
  }, [debouncedSearch]);
  return (
    <div className="flex flex-col sm:flex-row items-center">
      <SearchBox onChange={setSearch} value={search} />
      <Dropdown options={[...options, null]} placeholder="Filter By Vehicle" value={selected} />
    </div>
  );
};

export default Filter;
