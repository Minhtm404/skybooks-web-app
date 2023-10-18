import React from 'react';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

const NewArrival = () => {
  return (
    <div>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-900"
      >
        <div className="flex mx-40">
          <Breadcrumb.Item href="/" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/new-arrival">New Arrival</Breadcrumb.Item>
        </div>
      </Breadcrumb>

      <div className="mx-40 px-5 py-3">
        New Arrival
      </div>
    </div>
  );
};

export default NewArrival;
