import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Button, Spinner, Toast } from 'flowbite-react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { HiExclamation, HiHome } from 'react-icons/hi';
import { MdOutlineCancel } from 'react-icons/md';

import { Context as CartItemContext } from '../../contexts/CartItemContext';

const Cart = () => {
  const {
    cartItems,
    getAllCartItems,
    updateCartItem,
    deleteCartItem,
    isLoading: cartItemIsLoading,
    setIsLoading: cartItemSetIsLoading,
    error: cartItemError
  } = useContext(CartItemContext);

  useEffect(() => {
    cartItemSetIsLoading(true);
    getAllCartItems();
  }, []);

  const increaseValue = async (cartItemId, currentQuantity) => {
    await updateCartItem({ cartItemId, quantity: currentQuantity + 1 });
  };

  const decreaseValue = async (cartItemId, currentQuantity) => {
    if (currentQuantity > 1) {
      await updateCartItem({ cartItemId, quantity: currentQuantity - 1 });
    }
  };

  const handleDelete = async cartItemId => {
    await deleteCartItem({ cartItemId });
  };

  if (cartItemIsLoading) {
    return (
      <div className="relative w-full h-screen flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    );
  }

  if (cartItems) {
    return (
      <div>
        {cartItemError ? (
          <Toast className="absolute top-4 left-4">
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
              <HiExclamation className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">{cartItemError}</div>
            <Toast.Toggle />
          </Toast>
        ) : (
          <></>
        )}

        <Breadcrumb
          aria-label="Solid background breadcrumb example"
          className="bg-gray-50 px-5 py-3 dark:bg-gray-900"
        >
          <div className="flex mx-40">
            <Breadcrumb.Item href="/" icon={HiHome}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/account">Account</Breadcrumb.Item>
            <Breadcrumb.Item>Cart</Breadcrumb.Item>
          </div>
        </Breadcrumb>

        <div className="mx-40 mb-20 px-5 py-3">
          <div>
            <p className="text-3xl font-semibold text-center my-4">Your cart</p>
            <p className="text-center mb-8">
              Have {cartItems.reduce((count, item) => count + item.quantity, 0)} product
              {cartItems.reduce((count, item) => count + item.quantity, 0) > 1
                ? 's'
                : ''}{' '}
              in your cart
            </p>
          </div>

          <hr />

          <div className="my-8">
            {cartItems.map(item => (
              <div className="flex items-center leading-8 gap-4 border-b-2 p-4">
                <img
                  className="rounded-lg h-24 w-20"
                  src={`${item.product?.imageCover}/-/preview/130x130/-/quality/smart_retina/-/format/auto/`}    alt=""
                />
                <div className="w-full">
                  <div className="flex justify-between">
                    <p className="font-semibold ">{item.product.name}</p>
                    <button onClick={() => handleDelete(item._id)}>
                      <MdOutlineCancel />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm font-semibold">
                    {item.product.mainCollection.name}
                  </p>
                  <p className="text-sm">
                    {item.product.price.toLocaleString().concat('₫')}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border-2 rounded w-fit mt-2">
                      <p
                        className="px-2 py-2 text-red-600"
                        onClick={() => decreaseValue(item._id, item.quantity)}
                      >
                        <AiOutlineMinus />
                      </p>
                      <p className="px-4 border-x-2">{item.quantity}</p>
                      <p
                        className="px-2 py-2 text-green-600"
                        onClick={() => increaseValue(item._id, item.quantity)}
                      >
                        <AiOutlinePlus />
                      </p>
                    </div>
                    <p className="font-medium">
                      {(item.quantity * item.product.price).toLocaleString().concat('₫')}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-4 mb-4">
              <div className="flex justify-end items-center mt-4">
                <p className="text-lg">
                  Total:
                  <span className="text-3xl font-bold">
                    {' '}
                    {(
                      cartItems.reduce(
                        (sum, item) => sum + item.product.price * item.quantity,
                        0
                      ) ?? 0
                    )
                      .toLocaleString()
                      .concat('₫')}
                  </span>
                </p>
              </div>
            </div>

            <div className=" flex flex-row justify-end gap-2 mt-8">
              <Button as={Link} to={`/account/checkout`} className="w-fit uppercase">
                Check Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
