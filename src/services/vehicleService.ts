const BASE_URL = 'https://test-api-a1g.pages.dev';

type Parameters = {
  page?: number;
  vehicleType?: 'scooter' | 'bike' | null;
  search?: string | null;
};

export type Vehicle = {
  bike_id: string;
  lat: number;
  lon: number;
  is_reserved: boolean;
  is_disabled: boolean;
  vehicle_type: 'scooter' | 'bike';
  total_bookings: `${number}`;
  android: string;
  ios: string;
};

type Response = {
  vehicles: Vehicle[];
  ttl: number;
  totalBooking: number;
};

export const getVehicles = async ({ page = 1, vehicleType = null, search = null }: Parameters): Promise<Response> => {
  const rawResponse = await fetch(
    `${BASE_URL}/items?${`page=${page}`}${vehicleType ? `&vehicle_type=${vehicleType}` : ''}${
      search ? `&bike_id=${search}` : ''
    }`
  );
  const response = await rawResponse.json();

  if (search) {
    return {
      vehicles: response.data.bike && [response.data.bike],
      ttl: response.ttl,
      totalBooking: parseInt(response.data.bike.total_bookings),
    };
  }
  const totalBookingSum = response.data.bikes.reduce((acc: number, bike: Vehicle) => {
    return acc + parseInt(bike.total_bookings);
  }, 0);
  return {
    vehicles: response.data.bikes,
    ttl: response.ttl,
    totalBooking: totalBookingSum || 0,
  };
};

export const getVehicleById = async (bikeId: string): Promise<Response> => {
  const rawResponse = await fetch(`${BASE_URL}/items?bike_id=${bikeId}`);
  const response = await rawResponse.json();

  return {
    vehicles: [response.data.bike],
    ttl: response.ttl,
    totalBooking: parseInt(response.data.bike.total_bookings),
  };
};
