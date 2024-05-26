import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { getVehicleById, getVehicles } from '@/services/vehicleService';

const useVehicles = ({
  page = 1,
  vehicleType = null,
  search = null,
  vehicleId = null,
}: {
  page?: number;
  vehicleType?: 'bike' | 'scooter' | null;
  search?: string | null;
  vehicleId?: string | null;
}) => {
  const [ttl, setTtl] = useState<number | null>(null);
  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ['vehicles', page, vehicleType, search, vehicleId],
    queryFn: () => (vehicleId ? getVehicleById(vehicleId) : getVehicles({ page, vehicleType, search })),
  });

  useEffect(() => {
    if (!data) return;
    setTtl(data.ttl);
    const interval = setInterval(() => {
      setTtl((prev) => (prev ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [data]);

  useEffect(() => {
    if (ttl === 0) {
      refetch();
    }
  }, [ttl, refetch]);

  return {
    vehicles: data?.vehicles || [],
    totalBooking: data?.totalBooking || 0,
    isPending,
    isError,
    error,
    ttl,
  };
};

export default useVehicles;
