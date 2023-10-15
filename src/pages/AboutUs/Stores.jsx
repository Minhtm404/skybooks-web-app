import React from 'react';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { Sidebar } from '../../components/index';

const Stores = () => {
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
          <Breadcrumb.Item href="/about-us">About us</Breadcrumb.Item>
          <Breadcrumb.Item href="/about-us/stores">Stores</Breadcrumb.Item>
        </div>
      </Breadcrumb>

      <div className="mx-40 px-5 py-3 grid grid-cols-4">
        <Sidebar />
        <div className="col-span-3">
          <p className="text-3xl font-semibold my-5">Stores</p>
          <div className="text-sm space-y-2">
            <div>
              <p className="font-semibold italic">- Ha Noi</p>
              <ul className="text-gray-500">
                <li>
                  01 Somewhere St., Dist. X, Hanoi. TEL: 84 028 xxxxxxxx - (09:00 - 18:00)
                </li>
                <li>
                  01 Somewhere St., Dist. X, Hanoi. TEL: 84 028 xxxxxxxx - (09:00 - 18:00)
                </li>
                <li>
                  01 Somewhere St., Dist. X, Hanoi. TEL: 84 028 xxxxxxxx - (09:00 - 18:00)
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold italic">- Ho Chi Minh</p>
              <ul className="text-gray-500">
                <li>
                  01 Somewhere St., Dist. X, HCMC. TEL: 84 028 xxxxxxxx - (09:00 - 18:00)
                </li>
                <li>
                  01 Somewhere St., Dist. X, HCMC. TEL: 84 028 xxxxxxxx - (09:00 - 18:00)
                </li>
                <li>
                  01 Somewhere St., Dist. X, HCMC. TEL: 84 028 xxxxxxxx - (09:00 - 18:00)
                </li>
                <li>
                  01 Somewhere St., Dist. X, HCMC. TEL: 84 028 xxxxxxxx - (09:00 - 18:00)
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold italic">- Hoi An</p>
              <ul className="text-gray-500">
                <li>
                  01 Somewhere St., Hoi An, Quang Nam. TEL: 84 028 xxxxxxxx - (09:00 -
                  18:00)
                </li>
                <li>
                  01 Somewhere St., Hoi An, Quang Nam. TEL: 84 028 xxxxxxxx - (09:00 -
                  18:00)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stores;
