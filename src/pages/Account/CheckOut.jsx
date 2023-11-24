import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

  const handleSubmit = async e => {
    e.preventDefault();
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
      <div className="h-screen py-14 px-40 bg-gray-50">
        {accountError || cartItemError ? (
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
            <p>Delivery info</p>

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
                    <Label htmlFor="name" value="Name" />
                  </div>
                  <TextInput
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="phoneNumber" value="Phone number" />
                  </div>
                  <TextInput
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="border rounded p-4">
                <fieldset className="flex max-w-md flex-col gap-4">
                  <legend className="mb-4 text-sm">Delivery method</legend>
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
                    <Label htmlFor="delivery">Delivery</Label>
                  </div>

                  {deliveryCheck && (
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="address" value="Address" />
                      </div>
                      <Textarea
                        id="address"
                        name="address"
                        type="text"
                        placeholder="Enter address"
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
                      }}
                    />
                    <Label htmlFor="store">Receive at our store</Label>
                  </div>
                </fieldset>
              </div>

              <div className="border rounded p-4">
                <fieldset className="flex max-w-md flex-col gap-4">
                  <legend className="mb-4 text-sm">Payment method</legend>
                  <div className="flex items-center gap-2">
                    <Radio id="delivery" name="payment" value="Delivery" checked={true} />
                    <Label htmlFor="delivery">Cash on delivery (COD)</Label>
                  </div>
                </fieldset>
              </div>

              <div className="flex justify-between">
                <Button as={Link} to={'/account/cart'} color="light">
                  Cart
                </Button>
                <Button type="submit">Complete order</Button>
              </div>
            </form>
          </div>

          <div className="ml-8">
            <p>Product list</p>

            <div className="mt-4 items-center gap-2">
              {cartItems.map(item => (
                <div className="flex items-center leading-8 gap-4 py-4">
                  <img
                    className="rounded-lg h-20 w-16"
                    src="https://product.hstatic.net/200000090679/product/a11eaq8thkl_757a0ddca7b74dc7b30dfd32680930be_grande.jpg"
                    alt=""
                  />

                  <div className="w-full">
                    <p className="text-sm">{item.product.name}</p>

                    <div className="flex items-center justify-between">
                      <p className="border rounded px-2 bg-gray-100 text-xs">
                        {item.quantity}
                      </p>

                      <p className="text-sm">
                        {(item.quantity * item.product.price)
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
                placeholder="Promotion code"
                className="py-2 w-full col-span-3"
                value={code}
                onInput={e => {
                  setCode(e.target.value.toUpperCase());
                }}
              />
              <Button className="col-span-1">Apply</Button>
            </div>

            <hr />

            <div className="my-6 space-y-2">
              <div className="flex justify-between">
                <p className="text-gray-500 text-sm">Amount</p>
                <p className="text-sm">
                  {(
                    cartItems.reduce(
                      (sum, item) => sum + item.product.price * item.quantity,
                      0
                    ) ?? 0
                  )
                    .toLocaleString()
                    .concat('₫')}
                </p>
              </div>

              <div className="flex justify-between">
                <p className="text-gray-500 text-sm">Delivery fee</p>
                <p className="text-sm">
                  {!deliveryCheck
                    ? '---'
                    : cartItems.reduce(
                        (sum, item) => sum + item.product.price * item.quantity,
                        0
                      ) > 500000
                    ? '---'
                    : Number(50000).toLocaleString().concat('₫')}
                </p>
              </div>
            </div>

            <hr />

            <div className="flex justify-between mt-6">
              <p>Total</p>
              <p className="text-2xl font-medium">
                {(
                  (cartItems.reduce(
                    (sum, item) => sum + item.product.price * item.quantity,
                    0
                  ) ?? 0) +
                  (!deliveryCheck
                    ? 0
                    : cartItems.reduce(
                        (sum, item) => sum + item.product.price * item.quantity,
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
