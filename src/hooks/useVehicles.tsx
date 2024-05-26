import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { getVehicleById, getVehicles, VehicleServiceParametersType } from '@/services/vehicleService';

type Props = VehicleServiceParametersType & {
  vehicleId?: string | null;
};

const useVehicles = ({ page = 1, vehicleType = null, search = null, vehicleId = null }: Props) => {
  const [ttl, setTtl] = useState<number | null>(null);
  const { isLoading, isError, data, error, refetch } = useQuery({
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
    isLoading,
    isError,
    error,
    ttl,
  };
};

export default useVehicles;
