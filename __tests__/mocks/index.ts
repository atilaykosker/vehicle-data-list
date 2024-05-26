import { Vehicle } from '@/services/vehicleService';

export const DATA_LIST_MOCK: Vehicle[] = [
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
];
