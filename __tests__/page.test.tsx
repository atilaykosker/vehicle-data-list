import '@testing-library/jest-dom';

import { getByText, render, screen } from '@testing-library/react';

import DataList from '../src/ui/components/common/DataList';
import { DATA_LIST_MOCK } from './mocks';
describe('DataList', () => {
  it('should render correctly with data', () => {
    render(
      <DataList
        data={DATA_LIST_MOCK}
        renderItem={(item) => <div>{item.bike_id}</div>}
        keyExtractor={(item) => item.bike_id}
      />
    );
    expect(screen.getByText('123')).toBeInTheDocument();
  });

  it('should call the keyExtractor function for each item', () => {
    const keyExtractorMock = jest.fn();
    render(
      <DataList
        data={DATA_LIST_MOCK}
        renderItem={(item) => <div>{item.bike_id}</div>}
        keyExtractor={keyExtractorMock}
      />
    );
    expect(keyExtractorMock).toHaveBeenCalledTimes(DATA_LIST_MOCK.length);
  });

  it('should call the renderItem function for each item', () => {
    const renderItemMock = jest.fn();
    render(<DataList data={DATA_LIST_MOCK} renderItem={renderItemMock} keyExtractor={(item) => item.bike_id} />);
    expect(renderItemMock).toHaveBeenCalledTimes(DATA_LIST_MOCK.length);
  });
});
