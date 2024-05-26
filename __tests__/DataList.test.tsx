import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import DataList from '../src/ui/components/common/DataList';
import { dataListMock } from './mocks';

describe('DataList', () => {
  it('should render correctly with data', () => {
    render(
      <DataList
        data={dataListMock}
        renderItem={(item) => <div>{item.bike_id}</div>}
        keyExtractor={(item) => item.bike_id}
      />
    );
    expect(screen.getByText('123')).toBeInTheDocument();
  });

  it('should call the renderItem function for each item', () => {
    const renderItemMock = jest.fn();
    render(
      <DataList
        data={dataListMock}
        renderItem={renderItemMock}
        keyExtractor={(item) => item.bike_id}
      />
    );
    expect(renderItemMock).toHaveBeenCalledTimes(dataListMock.length);
  });
  it('should render correctly with no data', () => {
    render(
      <DataList
        data={[]}
        renderItem={(item) => <div>{item}</div>}
        keyExtractor={(item) => item}
      />
    );
    expect(screen.queryByText('123')).not.toBeInTheDocument();
  });
});
