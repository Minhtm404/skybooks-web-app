import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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

  const [t, i18n] = useTranslation('global');

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
          <p className="text-2xl font-medium text-gray-900">
            {t('orders.header')}
          </p>

          <div className="mt-6 space-y-6">
            {orders.map(o => (
              <div className="border rounded p-4 space-y-4">
                <Badge className="capitalize w-fit">
                  {t(`orders.${o.orderStatus}`)}
                </Badge>

                <hr />

                {o.products.map(item => (
                  <div className="flex items-center leading-8 gap-4 py-4">
                    <img
                      className="rounded-lg h-20 w-16"
                      src={`${item.product?.imageCover}/-/preview/130x130/-/quality/smart_retina/-/format/auto/`}
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
                  <p>{t('orders.total')}</p>

                  <div className="flex flex-col items-end gap-2">
                    <p className="text-2xl font-medium">
                      {o.price.toLocaleString().concat('₫')}
                    </p>

                    <Button as={Link} to={`/account/orders/${o._id}`} color="light">
                    {t('orders.details')}
                    </Button>
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
