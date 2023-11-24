import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Label, Spinner, TextInput, Toast } from 'flowbite-react';
import { HiExclamation } from 'react-icons/hi';

import { Context as AuthContext } from '../../contexts/AuthContext';
import { Context as OrderContext } from '../../contexts/OrderContext';

import { UserSidebar } from '../../components/index';

const Orders = () => {
  const { user, isAuthenticated, localLogin, isLoading, setIsLoading, error } =
    useContext(AuthContext);

  const {
    orders,
    getAllOrders,
    isLoading: orderIsLoading,
    setIsLoading: orderSetIsLoading,
    error: orderError
  } = useContext(OrderContext);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    localLogin();

    if (!isAuthenticated) {
      navigate('/account/login');
    }

    orderSetIsLoading(true);
    getAllOrders();
  }, [isAuthenticated]);

  if (isLoading || orderIsLoading) {
    return (
      <div className="relative w-full h-screen flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    );
  }

  if (user && orders) {
    return (
      <div className="mx-40 px-5 py-3 grid grid-cols-4">
        {error || orderError ? (
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

        <div className="col-span-3 m-10">
          {orders.map(o => (
            <div>
              <p className="">{o.orderStatus}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Orders;
