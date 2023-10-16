import React from 'react';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { Sidebar } from '../../components/index';

const DeliveryPolicy = () => {
  return (
    <div>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3"
      >
        <div className="flex mx-40">
          <Breadcrumb.Item href="/" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/delivery-policy">Delivery Policy</Breadcrumb.Item>
        </div>
      </Breadcrumb>

      <div className="mx-40 px-5 py-3 grid grid-cols-4">
        <Sidebar />
        <div className="col-span-3 mb-3">
          <p className="text-3xl font-semibold my-5">Delivery Policy</p>

          <div className="text-sm space-y-4 gap-2">
            <div className="space-y-2">
              <p className="text-gray-900">
                Products can be delivered all over the world.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">1. Delivery Time</p>
              <p className="text-gray-900">
                The domestic delivery time would take approximately 3-4 days.
              </p>
              <p className="text-gray-900">
                For worldwide delivery, it might take up to 1-2 weeks for the item to
                arrive.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">2. Cancellation</p>
              <p className="text-gray-900">
                The order would be cancelled if our staffs failed to contact the customer
                3 times.
              </p>
              <p className="text-gray-900">
                Customers can cancel the order without being charged, if the order has not
                been shipped yet.
              </p>
              <p className="text-gray-900">
                If the order is on the way being delivered and you still wish to cancel
                it, then only delivery fee will be charged.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">3. International Delivery</p>
              <p className="text-gray-900">
                For any delivery outside territory of Vietnam, please contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPolicy;
