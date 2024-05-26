import { VehicleType } from '@/services/vehicleService';

export const dataListMock: VehicleType[] = [
  {
    bike_id: '123',
    lat: 123,
    lon: 123,
    is_reserved: true,
    is_disabled: true,
    vehicle_type: 'scooter',
    total_bookings: '123',
    android: 'https://google.com',
    ios: 'https://apple.com',
  },
  {
    bike_id: '1235',
    lat: 123,
    lon: 123,
    is_reserved: false,
    is_disabled: false,
    vehicle_type: 'bike',
    total_bookings: '123',
    android: 'https://google.com',
    ios: 'https://apple.com',
  },
];
