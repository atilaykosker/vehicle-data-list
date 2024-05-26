import '@testing-library/jest-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';

import VehicleModal from '../src/ui/components/vehicle/VehicleModal';
import { vehicleMockScooter } from './mocks';

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn(),
}));

describe('VehicleModal', () => {
  beforeEach(() => {
    // Create a modal-root element and append it to the body
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    // Clean up the modal-root element after each test
    const modalRoot = document.getElementById('modal-root');
    if (modalRoot) {
      document.body.removeChild(modalRoot);
    }
  });

  it('should render the vehicle modal with data', () => {
    const queryClient = new QueryClient();
    (useQuery as jest.Mock).mockReturnValue({
      data: {
        vehicles: [vehicleMockScooter],
      },
      isLoading: false,
    });
    render(
      <QueryClientProvider client={queryClient}>
        <VehicleModal isOpened={true} vehicleId={'123'} onClose={() => {}} />
      </QueryClientProvider>
    );
    screen.debug();
    expect(screen.getByText('123')).toBeInTheDocument();
    expect(screen.getByText(vehicleMockScooter.lat)).toBeInTheDocument();
    expect(screen.getByText(vehicleMockScooter.lon)).toBeInTheDocument();
    expect(
      screen.getByText(vehicleMockScooter.vehicle_type)
    ).toBeInTheDocument();
    expect(
      screen.getByText(vehicleMockScooter.total_bookings)
    ).toBeInTheDocument();
  });
  it('should render the vehicle modal with loading state', () => {
    const queryClient = new QueryClient();
    (useQuery as jest.Mock).mockReturnValue({
      isLoading: true,
    });
    render(
      <QueryClientProvider client={queryClient}>
        <VehicleModal isOpened={true} vehicleId={'123'} onClose={() => {}} />
      </QueryClientProvider>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
  it('should redirect to the correct android link', () => {
    const queryClient = new QueryClient();
    (useQuery as jest.Mock).mockReturnValue({
      data: {
        vehicles: [vehicleMockScooter],
      },
      isLoading: false,
    });
    render(
      <QueryClientProvider client={queryClient}>
        <VehicleModal isOpened={true} vehicleId={'123'} onClose={() => {}} />
      </QueryClientProvider>
    );
    expect(screen.getAllByText('Click Here')[0]).toHaveAttribute(
      'href',
      vehicleMockScooter.android
    );
    expect(screen.getAllByText('Click Here')[1]).toHaveAttribute(
      'href',
      vehicleMockScooter.ios
    );
  });
});
