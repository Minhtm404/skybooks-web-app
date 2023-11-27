import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner, Toast } from 'flowbite-react';
import { HiExclamation } from 'react-icons/hi';

import { Context as OrderContext } from '../../contexts/OrderContext';

import { UserSidebar } from '../../components';

const OrderDetails = () => {
  const { id } = useParams();

  const { order, getOrder, isLoading, setIsLoading, error } = useContext(OrderContext);

  useEffect(() => {
    setIsLoading(true);
    getOrder(id);
  }, []);

  if (isLoading) {
    return (
      <div className="relative w-full h-screen flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    );
  }

  if (order) {
    return (
      <div className="mx-40 px-5 py-3 grid grid-cols-4">
        {error || error ? (
          <Toast className="absolute top-4 left-4">
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
              <HiExclamation className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">{error}</div>
            <Toast.Toggle />
          </Toast>
        ) : (
          <></>
        )}

        <UserSidebar />

        <div className="col-span-3 m-16 pt-8">
          <p className="text-2xl font-medium text-gray-900">My orders</p>

          <div className="mt-6 space-y-6">
           
          </div>
        </div>
      </div>
    );
  }
};

export default OrderDetails;
