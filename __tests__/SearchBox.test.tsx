import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import SearchBox from '../src/ui/components/common/SearchBox';

describe('SearchBox', () => {
  it('should render correctly', () => {
    render(<SearchBox onChange={() => {}} />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });
  it('should call the onChange function when the input changes', () => {
    const onChangeMock = jest.fn();

    render(<SearchBox onChange={onChangeMock} />);
    const input = screen.getByPlaceholderText('Search') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('test');
  });
});
