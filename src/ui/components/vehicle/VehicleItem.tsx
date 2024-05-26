import Image from 'next/image';

import { VehicleType } from '@/services/vehicleService';

const VehicleItem = ({
  vehicle,
  detailAction,
}: {
  vehicle: VehicleType;
  detailAction: (bikeId: string) => void;
}) => {
  return (
    <li className='flex items-center justify-between gap-x-6 py-5'>
      <div className='flex min-w-0 gap-x-4'>
        {vehicle.vehicle_type ? (
          <Image
            src={`${vehicle.vehicle_type === 'bike' ? '/assets/bike.svg' : '/assets/scooter.svg'}`}
            width={40}
            height={40}
            alt={''}
          />
        ) : (
          <div className='flex h-[40px] w-[40px] items-center justify-center text-2xl font-black'>
            ?
          </div>
        )}

        <div className='min-w-0 flex-auto'>
          <p className='text-sm font-semibold leading-6 text-gray-900'>
            {vehicle.bike_id}
          </p>
          <p className='mt-1 truncate text-xs capitalize leading-5 text-gray-500'>
            {vehicle.vehicle_type}
          </p>
        </div>
      </div>
      <div className='shrink-0 sm:flex sm:flex-col sm:items-end'>
        <button
          onClick={() => {
            detailAction(vehicle.bike_id);
          }}
          className='inline-flex items-center gap-2 rounded-lg bg-slate-500 px-3 py-2 text-center text-sm text-white hover:bg-gray-900'
        >
          Display More
          <Image src={'/assets/arrow.svg'} width={12} height={12} alt={''} />
        </button>
      </div>
    </li>
  );
};

export default VehicleItem;
