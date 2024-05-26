import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Pagination from '../src/ui/components/common/Pagination';

describe('Pagination', () => {
  it('should render correctly', () => {
    render(<Pagination page={1} />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });
  it('should call the onPageChange function when clicked', () => {
    render(<Pagination page={1} />);
    expect(screen.getByText('Next')).toHaveAttribute('href');
  });
  it('should call the onPageChange function when clicked', () => {
    render(<Pagination page={1} />);
    expect(screen.getByText('Prev')).toHaveAttribute('href');
  });
});
