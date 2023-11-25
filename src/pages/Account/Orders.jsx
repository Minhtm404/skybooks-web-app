import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge, Button, Label, Spinner, TextInput, Toast } from 'flowbite-react';
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

        <div className="col-span-3 m-16 pt-8">
          <p className="text-2xl font-medium text-gray-900">My orders</p>

          <div className="mt-6 space-y-6">
            {orders.map(o => (
              <div className="border rounded p-4 space-y-4">
                <Badge className="capitalize w-fit">{o.orderStatus}</Badge>

                <hr />

                {o.products.map(item => (
                  <div className="flex items-center leading-8 gap-4 py-4">
                    <img
                      className="rounded-lg h-20 w-16"
                      src="https://product.hstatic.net/200000090679/product/a11eaq8thkl_757a0ddca7b74dc7b30dfd32680930be_grande.jpg"
                      alt=""
                    />

                    <div className="w-full">
                      <p className="text-sm">
                        {item.product?.name ?? 'This product no longer exist'}
                      </p>
                      <p className="border rounded px-2 bg-gray-100 text-xs w-fit">
                        {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}

                <hr />

                <div className="flex justify-between mt-6">
                  <p>Total</p>

                  <div className="flex flex-col items-end gap-2">
                    <p className="text-2xl font-medium">
                      {o.price.toLocaleString().concat('₫')}
                    </p>

                    <Button color="light">Details</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Orders;
