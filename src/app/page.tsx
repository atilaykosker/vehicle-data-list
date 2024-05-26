'use client';
import { useState } from 'react';

import { VEHICLE_OPTIONS } from '@/constants/vehicles';
import useDebounce from '@/hooks/useDebounce';
import useVehicles from '@/hooks/useVehicle';
import { VehicleOptionType, VehicleType } from '@/services/vehicleService';
import { DataList, Filter, Pagination } from '@/ui/components/common';
import { VehicleItem, VehicleModal } from '@/ui/components/Vehicle';

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const [debouncedSearch, search, setSearch] = useDebounce<string>('', 1000);
  const [selectedVehicleType, setSelectedVehicleType] = useState<VehicleOptionType | null>(null);
  const [vehicleId, setVehicleId] = useState<string | null>(null);
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const { isPending, isError, vehicles, error, ttl, totalBooking } = useVehicles({
    page: page,
    vehicleType: selectedVehicleType,
    search: debouncedSearch.length > 3 ? debouncedSearch : null,
  });

  const displayDetail = (bikeId: string) => {
    setVehicleId(bikeId);
    setIsOpened(true);
  };

  return (
    <section>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-8  items-center">
        <Filter
          search={search}
          setSearch={setSearch}
          selected={selectedVehicleType}
          setSelected={setSelectedVehicleType as React.Dispatch<React.SetStateAction<string | null>>}
          options={VEHICLE_OPTIONS}
        />
        <div className="flex flex-col text-sm text-slate-500 items-center sm:items-start">
          <span className="min-w-[132px]">Will refresh in: {ttl}</span>
          <span>Total bookings of listed vehicles: {totalBooking}</span>
        </div>
      </div>
      <div className="flex flex-col items-center m-4">
        {isPending && <span>Loading...</span>}
        {isError && <span>Error: {error?.message}</span>}
      </div>
      <DataList<VehicleType>
        data={vehicles}
        keyExtractor={(item) => item.bike_id}
        renderItem={(item) => <VehicleItem vehicle={item} detailAction={displayDetail} />}
      />
      <Pagination page={page} onPageChange={setPage} />
      {vehicleId && <VehicleModal onClose={() => setIsOpened(false)} isOpened={isOpened} vehicleId={vehicleId} />}
    </section>
  );
}
