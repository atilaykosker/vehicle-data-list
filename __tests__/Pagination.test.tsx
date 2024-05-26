import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Pagination from '../src/ui/components/common/Pagination';

describe('Pagination', () => {
  it('should render correctly', () => {
    render(<Pagination page={1} onPageChange={() => {}} />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });
  it('should call the onPageChange function when clicked', () => {
    const onPageChangeMock = jest.fn();
    render(<Pagination page={1} onPageChange={onPageChangeMock} />);
    screen.getByText('Next').click();
    expect(onPageChangeMock).toHaveBeenCalledTimes(1);
  });
});
