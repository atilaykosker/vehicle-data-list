import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import VehicleItem from '../src/ui/components/vehicle/VehicleItem';
import { vehicleMockBike, vehicleMockScooter } from './mocks';

describe('VehicleList', () => {
  it('should render correctly with scooter', () => {
    render(<VehicleItem vehicle={vehicleMockScooter} detailAction={() => {}} />);
    expect(screen.getByText('scooter')).toBeInTheDocument();
  });
  it('should render correctly with bike', () => {
    render(<VehicleItem vehicle={vehicleMockBike} detailAction={() => {}} />);
    expect(screen.getByText('bike')).toBeInTheDocument();
  });
  it('should call the detailAction function when clicked', () => {
    const detailActionMock = jest.fn();
    render(<VehicleItem vehicle={vehicleMockBike} detailAction={detailActionMock} />);
    screen.getByText('Display More').click();
    expect(detailActionMock).toHaveBeenCalledTimes(1);
  });
    it('should call the detailAction function with the correct bikeId', () => {
        const detailActionMock = jest.fn();
        render(<VehicleItem vehicle={vehicleMockBike} detailAction={detailActionMock} />);
        screen.getByText('Display More').click();
        expect(detailActionMock).toHaveBeenCalledWith('1235');
    });
    
});
