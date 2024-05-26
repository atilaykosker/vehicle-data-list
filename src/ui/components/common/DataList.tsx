'use client';
import React, { memo } from 'react';

interface Props<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}
const DataList = <T extends object>({
  data,
  keyExtractor,
  renderItem,
}: Props<T>) => {
  return (
    <ul role='list' className='divide-y divide-gray-100 p-1'>
      {data.map(
        (item, i) =>
          item && <div key={keyExtractor(item) + i}>{renderItem(item)}</div>
      )}
    </ul>
  );
};

export default memo(DataList) as typeof DataList;
