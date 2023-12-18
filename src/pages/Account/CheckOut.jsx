import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Avatar,
  Button,
  Label,
  Radio,
  Spinner,
  TextInput,
  Textarea,
  Toast
} from 'flowbite-react';
import { HiExclamation } from 'react-icons/hi';

import { Context as AuthContext } from '../../contexts/AuthContext';
import { Context as CartItemContext } from '../../contexts/CartItemContext';
import { Context as OrderContext } from '../../contexts/OrderContext';

const CheckOut = () => {
  const {
    user,
    isAuthenticated,
    localLogin,
    isLoading: accountIsLoading,
    setIsLoading: accountSetIsLoading,
    error: accountError
  } = useContext(AuthContext);

  const {
    cartItems,
    getAllCartItems,
    isLoading: cartItemIsLoading,
    setIsLoading: cartItemSetIsLoading,
    error: cartItemError
  } = useContext(CartItemContext);

  const {
    createOrder,
    isLoading: orderIsLoading,
    setIsLoading: orderSetIsLoading,
    error: orderError
  } = useContext(OrderContext);

  const navigate = useNavigate();

  const [name, setName] = useState(user?.name);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);
  const [deliveryCheck, setDeliveryCheck] = useState(true);
  const [address, setAddress] = useState(user?.address);
  const [code, setCode] = useState();

  useEffect(() => {
    if (!isAuthenticated) {
      accountSetIsLoading(true);
      localLogin();
    }

    cartItemSetIsLoading(true);
    getAllCartItems();
  }, []);

  const [t, i18n] = useTranslation('global');

  const handleSubmit = async e => {
    e.preventDefault();

    orderSetIsLoading(true);
    await createOrder({
      name,
      phoneNumber,
      address: deliveryCheck ? address : undefined,
      products: cartItems,
      price:
        (cartItems.reduce((sum, item) => sum + item.product.priceDiscount * item.quantity, 0) ??
          0) +
        (!deliveryCheck
          ? 0
          : cartItems.reduce((sum, item) => sum + item.product.priceDiscount * item.quantity, 0) >
            500000
          ? 0
          : 50000)
    });

    navigate('/account/orders');
  };

  if (accountIsLoading || cartItemIsLoading) {
    return (
      <div className="relative w-full h-screen flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    );
  }

  if (user && cartItems) {
    return (
      <div className="py-14 px-40 bg-gray-50">
        {accountError || cartItemError || orderError ? (
          <Toast className="absolute top-4 left-4">
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
              <HiExclamation className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
              {accountError || cartItemError}
            </div>
            <Toast.Toggle />
          </Toast>
        ) : (
          <></>
        )}

        <div className="mr-8">
          <p className="text-3xl font-medium uppercase">Skybooks</p>
        </div>

        <div className="mt-4 grid grid-cols-2">
          <div className="mr-8">
            <p>{t('cart.delivery_info')}</p>

            <div className="mt-4 flex items-center gap-2">
              <Avatar size="md" />
              <div>
                <p className="text-sm">{user.name}</p>
                <p className="text-xs">{user.email}</p>
              </div>
            </div>

            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
              <div className="border rounded p-4 space-y-4">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value={t('cart.name')} />
                  </div>
                  <TextInput
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t('cart.placeholder_name')}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="phoneNumber" value={t('cart.phone_number')} />
                  </div>
                  <TextInput
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    placeholder={t('cart.placeholder_phone_number')}
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="border rounded p-4">
                <fieldset className="flex max-w-md flex-col gap-4">
                  <legend className="mb-4 text-sm">{t('cart.delivery_method')}</legend>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="delivery"
                      name="deliveryMethod"
                      value="Delivery"
                      checked={deliveryCheck}
                      onClick={() => {
                        setDeliveryCheck(true);
                      }}
                    />
                    <Label htmlFor="delivery">{t('cart.delivery')}</Label>
                  </div>

                  {deliveryCheck && (
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="address" value={t('cart.address')} />
                      </div>
                      <Textarea
                        id="address"
                        name="address"
                        type="text"
                        placeholder={t('cart.placeholder_address')}
                        rows={4}
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        required
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <Radio
                      id="store"
                      name="deliveryMethod"
                      value="Store"
                      checked={!deliveryCheck}
                      onClick={() => {
                        setDeliveryCheck(false);
                        setAddress(undefined);
                      }}
                    />
                    <Label htmlFor="store">{t('cart.receive_at_store')}</Label>
                  </div>
                </fieldset>
              </div>

              <div className="border rounded p-4">
                <fieldset className="flex max-w-md flex-col gap-4">
                  <legend className="mb-4 text-sm">{t('cart.payment_method')}</legend>
                  <div className="flex items-center gap-2">
                    <Radio id="delivery" name="payment" value="Delivery" checked={true} />
                    <Label htmlFor="delivery">{t('cart.cod')}</Label>
                  </div>
                </fieldset>
              </div>

              <div className="flex justify-between">
                <Button as={Link} to={'/account/cart'} color="light">
                  {t('cart.header')}
                </Button>
                <Button type="submit">
                  <div className="flex flex-row gap-2">
                    {!orderIsLoading ? (
                      ''
                    ) : (
                      <Spinner aria-label="Alternate spinner button example" size="sm" />
                    )}
                    <span>{t('cart.complete_order')}</span>
                  </div>
                </Button>
              </div>
            </form>
          </div>

          <div className="ml-8">
            <p>{t('cart.product_list')}</p>

            <div className="mt-4 items-center gap-2">
              {cartItems.map(item => (
                <div className="flex items-center leading-8 gap-4 py-4">
                  <img
                    className="rounded-lg h-20 w-16"
                    src={`${item.product?.imageCover}/-/preview/130x130/-/quality/smart_retina/-/format/auto/`}
                    alt=""
                  />

                  <div className="w-full">
                    <p className="text-sm">{item.product.name}</p>

                    <div className="flex items-center justify-between">
                      <p className="border rounded px-2 bg-gray-100 text-xs">
                        {item.quantity}
                      </p>

                      <p className="text-sm">
                        {(item.quantity * item.product.priceDiscount)
                          .toLocaleString()
                          .concat('₫')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <hr />

            <div className="grid grid-cols-4 items-center justify-between gap-2 my-2">
              <TextInput
                id="promoCode"
                name="promoCode"
                type="text"
                placeholder={t('cart.promo_code')}
                className="py-2 w-full col-span-3"
                value={code}
                onInput={e => {
                  setCode(e.target.value.toUpperCase());
                }}
              />
              <Button className="col-span-1">{t('cart.apply_code_button')}</Button>
            </div>

            <hr />

            <div className="my-6 space-y-2">
              <div className="flex justify-between">
                <p className="text-gray-500 text-sm">{t('cart.amount')}</p>
                <p className="text-sm">
                  {(
                    cartItems.reduce(
                      (sum, item) => sum + item.product.priceDiscount * item.quantity,
                      0
                    ) ?? 0
                  )
                    .toLocaleString()
                    .concat('₫')}
                </p>
              </div>

              <div className="flex justify-between">
                <p className="text-gray-500 text-sm">{t('cart.delivery_fee')}</p>
                <p className="text-sm">
                  {!deliveryCheck
                    ? '---'
                    : cartItems.reduce(
                        (sum, item) => sum + item.product.priceDiscount * item.quantity,
                        0
                      ) > 500000
                    ? '---'
                    : Number(50000).toLocaleString().concat('₫')}
                </p>
              </div>
            </div>

            <hr />

            <div className="flex justify-between mt-6">
              <p>{t('cart.total')}</p>
              <p className="text-2xl font-medium">
                {(
                  (cartItems.reduce(
                    (sum, item) => sum + item.product.priceDiscount * item.quantity,
                    0
                  ) ?? 0) +
                  (!deliveryCheck
                    ? 0
                    : cartItems.reduce(
                        (sum, item) => sum + item.product.priceDiscount * item.quantity,
                        0
                      ) > 500000
                    ? 0
                    : 50000)
                )
                  .toLocaleString()
                  .concat('₫')}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CheckOut;
