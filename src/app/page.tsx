'use client';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { VEHICLE_OPTIONS } from '@/constants/vehicles';
import useVehicles from '@/hooks/useVehicles';
import { VehicleOptionType, VehicleType } from '@/services/vehicleService';
import { DataList, Filter, Pagination } from '@/ui/components/common';
import { VehicleItem, VehicleModal } from '@/ui/components/vehicle';

export default function Home() {
  const searchParams = useSearchParams();

  const selectedVehicleTypeParam = searchParams.get(
    'vehicle_type'
  ) as VehicleOptionType;
  const pageParam = searchParams.get('page')
    ? parseInt(searchParams.get('page') as string)
    : 1;
  const searchParam = searchParams.get('search') || '';

  const [vehicleId, setVehicleId] = useState<string | null>(null);
  const [isDetailOpened, setIsDetailOpened] = useState<boolean>(false);

  const { isLoading, isError, vehicles, error, ttl, totalBooking } =
    useVehicles({
      page: pageParam,
      vehicleType: selectedVehicleTypeParam,
      search: searchParam.length >= 5 ? searchParam : null,
    });

  const displayDetail = (bikeId: string) => {
    setVehicleId(bikeId);
    setIsDetailOpened(true);
  };

  return (
    <section>
      <div className='flex flex-col items-start gap-4 sm:flex-row  sm:gap-8'>
        <Filter selected={selectedVehicleTypeParam} options={VEHICLE_OPTIONS} />
        <div className='flex flex-col items-center text-sm text-slate-500 sm:items-start'>
          <span className='min-w-[132px]'>Will refresh in: {ttl}</span>
          <span>Total bookings of listed vehicles: {totalBooking}</span>
        </div>
      </div>
      <div className='m-4 flex flex-col items-center'>
        {isLoading && <span>Loading...</span>}
        {isError && <span>Error: {error?.message}</span>}
        {vehicles.length === 0 && !isLoading && <span>No data found</span>}
      </div>
      <DataList<VehicleType>
        data={vehicles}
        keyExtractor={(item) => item.bike_id}
        renderItem={(item) => (
          <VehicleItem vehicle={item} detailAction={displayDetail} />
        )}
      />
      <Pagination page={pageParam} />
      {vehicleId && (
        <VehicleModal
          onClose={() => setIsDetailOpened(false)}
          isOpened={isDetailOpened}
          vehicleId={vehicleId}
        />
      )}
    </section>
  );
}
