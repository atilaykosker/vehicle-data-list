import Link from 'next/link';
import React from 'react';

import useVehicles from '@/hooks/useVehicle';
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
  const { isPending, isError, vehicles, error } = useVehicles({
    vehicleId,
  });
  if (!isOpened) return null;
  if (isPending) return <Modal>Loading...</Modal>;
  if (isError) return <Modal>Error: {error?.message}</Modal>;
  const vehicle = vehicles[0];
  return (
    <Modal>
      <button className="w-full text-end font-bold text-lg text-slate-500" onClick={onClose}>
        X
      </button>
      <div className="flex items-center justify-center">
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto overflow-hidden divide-y bg-white shadow-md rounded-lg">
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">ID</th>
              <td className="py-3 px-4">{vehicle.bike_id}</td>
            </tr>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Latitude</th>
              <td className="py-3 px-4">{vehicle.lat}</td>
            </tr>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Longitude</th>
              <td className="py-3 px-4">{vehicle.lon}</td>
            </tr>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Reserved</th>
              <td className="py-3 px-4">{Boolean(vehicle.is_reserved) ? 'Yes' : 'No'}</td>
            </tr>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Disabled</th>
              <td className="py-3 px-4">{Boolean(vehicle.is_disabled) ? 'Yes' : 'No'}</td>
            </tr>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Vehicle Type</th>
              <td className="py-3 px-4 capitalize">{vehicle.vehicle_type}</td>
            </tr>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Total Bookings</th>
              <td className="py-3 px-4">{vehicle.total_bookings}</td>
            </tr>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Android</th>
              <td className="py-3 px-4 text-sky-500">
                <Link target="_blank" href={vehicle.android}>
                  Click Here
                </Link>
              </td>
            </tr>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Ios</th>
              <td className="py-3 px-4 text-sky-500">
                <Link target="_blank" href={vehicle.ios}>
                  Click Here
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </Modal>
  );
};

export default VehicleModal;
