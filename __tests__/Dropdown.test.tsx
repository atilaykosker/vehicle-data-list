import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Dropdown from '../src/ui/components/common/Dropdown';

describe('Dropdown', () => {
  it('should render correctly', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} value={null} onChange={() => {}} placeholder={''} />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });
  it('should call the setSelected function when clicked', () => {
    const setSelectedMock = jest.fn();
    render(<Dropdown options={['Option 1', 'Option 2']} value={null} onChange={setSelectedMock} placeholder={''} />);
    screen.getByText('Option 1').click();
    expect(setSelectedMock).toHaveBeenCalledTimes(1);
  });
  it('should render placeholder when value is null', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} value={null} onChange={() => {}} placeholder={'Select'} />);
    expect(screen.getByText('Select')).toBeInTheDocument();
  });
});
