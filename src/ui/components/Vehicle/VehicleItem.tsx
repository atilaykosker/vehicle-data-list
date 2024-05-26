import Image from 'next/image';

import { Vehicle } from '@/services/vehicleService';

const VehicleItem = ({ vehicle, detailAction }: { vehicle: Vehicle; detailAction: (bikeId: string) => void }) => {
  return (
    <li className="flex justify-between gap-x-6 py-5 items-center">
      <div className="flex min-w-0 gap-x-4">
        {vehicle.vehicle_type ? (
          <Image
            src={`${vehicle.vehicle_type === 'bike' ? '/assets/bike.svg' : '/assets/scooter.svg'}`}
            width={40}
            height={40}
            alt={''}
          />
        ) : (
          <div className="w-[40px] h-[40px] flex items-center justify-center font-black text-2xl">?</div>
        )}

        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">{vehicle.bike_id}</p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500 capitalize">{vehicle.vehicle_type}</p>
        </div>
      </div>
      <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
        <button
          onClick={() => {
            detailAction(vehicle.bike_id);
          }}
          className="inline-flex gap-2 items-center px-3 py-2 text-sm text-center text-white bg-slate-500 rounded-lg hover:bg-gray-900"
        >
          Display More
          <Image src={'/assets/arrow.svg'} width={12} height={12} alt={''} />
        </button>
      </div>
    </li>
  );
};

export default VehicleItem;
