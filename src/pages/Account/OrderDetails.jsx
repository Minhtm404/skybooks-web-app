import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Badge, Spinner, Toast } from 'flowbite-react';
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

  const [t, i18n] = useTranslation('global');

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

        <div className="col-span-3 m-16 pt-8 space-y-12">
          <p className="text-2xl font-medium text-gray-900 flex items-center gap-2">
            {t('orders.order_details')} {`#${order._id}`}
            {' - '}
            <Badge className="w-fit capitalize">{t(`orders.${order.orderStatus}`)}</Badge>
          </p>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <p className="uppercase text-xs font-semibold">{t('orders.address')}</p>
              <div className="border rounded p-2 bg-gray-50 h-full">
                <p className="uppercase text-sm font-bold">{order.name}</p>
                {order.address ? (
                  <p className="text-sm">
                    {t('orders.address')}: {order.address}
                  </p>
                ) : (
                  <></>
                )}
                <p className="text-sm">
                  {t('orders.phone_number')}: {order.phoneNumber}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="uppercase text-xs font-semibold">
                {t('orders.delivery_status')}
              </p>
              <div className="border rounded p-2 bg-gray-50 h-full">
                {order.address ? (
                  <p className="text-sm">{t('orders.delivery_by_skybooks')}</p>
                ) : (
                  <p className="text-sm">{t('orders.receive_at_store')}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <p className="uppercase text-xs font-semibold">
                {t('orders.payment_status')}
              </p>
              <div className="border rounded p-2 bg-gray-50 h-full">
                <p className="text-sm">{t('orders.cod')}</p>
                <p className="text-sm italic">
                  {order.paymentStatus === true
                    ? t('orders.paid_order')
                    : t('orders.unpaid_order')}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-2 border rounded p-4">
            <p>{t('orders.products')}</p>

            <hr />

            <div>
              {order.products.map(product => (
                <div className="flex items-start leading-8 gap-4 py-4">
                  <img
                    className="rounded-lg h-20 w-16"
                    src={`${product.product?.imageCover}/-/preview/130x130/-/quality/smart_retina/-/format/auto/`}
                    alt=""
                  />

                  <div className="w-full">
                    <p className="text-sm">{product.product.name}</p>

                    <div className="flex items-start justify-between">
                      <p className="border rounded px-2 bg-gray-100 text-xs">
                        {product.quantity}
                      </p>

                      <p className="text-sm">
                        {(product.quantity * product.product.price)
                          .toLocaleString()
                          .concat('₫')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <hr />

            <div className="my-6 space-y-2">
              <div className="flex justify-between">
                <p className="text-gray-500 text-sm">{t('orders.amount')}</p>
                <p className="text-sm">
                  {Number(order.price).toLocaleString().concat('₫')}
                </p>
              </div>

              <div className="flex justify-between">
                <p className="text-gray-500 text-sm">{t('orders.delivery_fee')}</p>
                <p className="text-sm">---</p>
              </div>
            </div>

            <hr />

            <div className="flex justify-between mt-6">
              <p>{t('orders.total')}</p>
              <p className="text-2xl font-medium">
                {Number(order.price).toLocaleString().concat('₫')}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default OrderDetails;
