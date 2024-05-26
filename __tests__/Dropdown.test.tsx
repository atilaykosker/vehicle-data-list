import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';

import Dropdown from '../src/ui/components/common/Dropdown';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('next/link', () => {
  // eslint-disable-next-line react/display-name
  return ({ children, href }: { children: React.ReactNode; href: string; as: string }) => {
    return <a href={href}>{children}</a>;
  };
});

describe('Dropdown', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    });
  });
  it('should render correctly', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} value={null} placeholder={''} />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('should render links with correct href and as', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} value={null} placeholder={''} />);
    expect(screen.getByText('Option 1')).toHaveAttribute('href');
  });
});
