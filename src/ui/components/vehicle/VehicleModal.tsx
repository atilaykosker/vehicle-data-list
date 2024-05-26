import Link from 'next/link';
import React from 'react';

import useVehicles from '@/hooks/useVehicles';
import { Modal } from '@/ui/components/common';

const VehicleModal = ({
  isOpened,
  vehicleId,
  onClose,
}: {
  isOpened: boolean;
  vehicleId: string;
  onClose: () => void;
}) => {
  const { isLoading, isError, vehicles, error } = useVehicles({
    vehicleId,
  });
  if (!isOpened) return null;
  if (isLoading) return <Modal>Loading...</Modal>;
  if (isError) return <Modal>Error: {error?.message}</Modal>;
  const vehicle = vehicles[0];
  return (
    <Modal>
      <button
        className='w-full text-end text-lg font-bold text-slate-500'
        onClick={onClose}
      >
        X
      </button>
      <div className='flex items-center justify-center'>
        <div className='overflow-x-auto'>
          <table className='mx-auto w-full max-w-4xl divide-y overflow-hidden rounded-lg bg-white shadow-md'>
            <tbody>
              <tr className='bg-blue-gray-100 text-gray-700'>
                <th className='px-4 py-3 text-left'>ID</th>
                <td className='px-4 py-3'>{vehicle.bike_id}</td>
              </tr>
              <tr className='bg-blue-gray-100 text-gray-700'>
                <th className='px-4 py-3 text-left'>Latitude</th>
                <td className='px-4 py-3'>{vehicle.lat}</td>
              </tr>
              <tr className='bg-blue-gray-100 text-gray-700'>
                <th className='px-4 py-3 text-left'>Longitude</th>
                <td className='px-4 py-3'>{vehicle.lon}</td>
              </tr>
              <tr className='bg-blue-gray-100 text-gray-700'>
                <th className='px-4 py-3 text-left'>Reserved</th>
                <td className='px-4 py-3'>
                  {Boolean(vehicle.is_reserved) ? 'Yes' : 'No'}
                </td>
              </tr>
              <tr className='bg-blue-gray-100 text-gray-700'>
                <th className='px-4 py-3 text-left'>Disabled</th>
                <td className='px-4 py-3'>
                  {Boolean(vehicle.is_disabled) ? 'Yes' : 'No'}
                </td>
              </tr>
              <tr className='bg-blue-gray-100 text-gray-700'>
                <th className='px-4 py-3 text-left'>Vehicle Type</th>
                <td className='px-4 py-3 capitalize'>{vehicle.vehicle_type}</td>
              </tr>
              <tr className='bg-blue-gray-100 text-gray-700'>
                <th className='px-4 py-3 text-left'>Total Bookings</th>
                <td className='px-4 py-3'>{vehicle.total_bookings}</td>
              </tr>
              <tr className='bg-blue-gray-100 text-gray-700'>
                <th className='px-4 py-3 text-left'>Android</th>
                <td className='px-4 py-3 text-sky-500'>
                  <Link target='_blank' href={vehicle.android}>
                    Click Here
                  </Link>
                </td>
              </tr>
              <tr className='bg-blue-gray-100 text-gray-700'>
                <th className='px-4 py-3 text-left'>Ios</th>
                <td className='px-4 py-3 text-sky-500'>
                  <Link target='_blank' href={vehicle.ios}>
                    Click Here
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Modal>
  );
};

export default VehicleModal;
