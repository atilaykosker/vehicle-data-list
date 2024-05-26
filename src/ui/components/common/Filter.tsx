'use client';
import { Dropdown, SearchBox } from '@/ui/components/common';

type Props = {
  setSearch: React.Dispatch<string>;
  search: string;
  selected: string | null;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
  options: string[];
};
const Filter: React.FC<Props> = ({ setSearch, search, selected, setSelected, options }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center">
      <SearchBox onChange={setSearch} value={search} />
      <Dropdown options={[...options, null]} placeholder="Filter By Vehicle" value={selected} onChange={setSelected} />
    </div>
  );
};

export default Filter;
