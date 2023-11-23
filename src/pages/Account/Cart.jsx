import React, { useContext, useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { Breadcrumb, Button, Carousel, Spinner, Toast } from 'flowbite-react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { HiExclamation, HiHome } from 'react-icons/hi';

import { Context as ProductContext } from '../../contexts/ProductContext';
import { Context as CartItemContext } from '../../contexts/CartItemContext';

const Cart = () => {
  const {
    cartItems,
    getAllCartItems,
    updateCartItem,
    isLoading: cartItemIsLoading,
    setIsLoading: cartItemSetIsLoading,
    error: cartItemError
  } = useContext(CartItemContext);

  const [total, setTotal] = useState(
    cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0) ?? 0
  );

  useEffect(() => {
    cartItemSetIsLoading(true);
    getAllCartItems();
  }, []);

  const increaseValue = async (cartItemId, currentQuantity) => {
    await updateCartItem({ cartItemId, quantity: currentQuantity + 1 });
    setTotal(
      cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0) ?? 0
    );
  };

  const decreaseValue = async (cartItemId, currentQuantity) => {
    if (currentQuantity > 1) {
      await updateCartItem({ cartItemId, quantity: currentQuantity - 1 });
      setTotal(
        cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0) ?? 0
      );
    }
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
            <p className="text-center mb-8">Have 0 product in your cart</p>
          </div>

          <hr />

          <div className="my-8">
            {cartItems.map(item => (
              <div className="flex items-center leading-8 gap-5 border-b-2 dark:border-gray-600 p-4">
                <img
                  className="rounded-lg h-24 w-20"
                  src="https://product.hstatic.net/200000090679/product/a11eaq8thkl_757a0ddca7b74dc7b30dfd32680930be_grande.jpg"
                  alt=""
                />
                <div>
                  <p className="font-semibold ">{item.product.name}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
                    {item.product.mainCollection.name}
                  </p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg">
                      {item.product.price.toLocaleString().concat('₫')}
                    </p>
                    <div className="flex items-center border-2 rounded">
                      <p className="px-2 dark:border-gray-600 text-red-600">
                        <AiOutlineMinus
                          onClick={() => decreaseValue(item._id, item.quantity)}
                        />
                      </p>
                      <p className="px-2 border-x-2 dark:border-gray-600">
                        {item.quantity}
                      </p>
                      <p className="px-2 dark:border-gray-600 text-green-600">
                        <AiOutlinePlus
                          onClick={() => increaseValue(item._id, item.quantity)}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-3 mb-3">
              <div className="flex justify-end items-center mt-3">
                <p className="text-lg">
                  Total:
                  <span className="text-3xl font-bold">
                    {' '}
                    {total.toLocaleString().concat('₫')}
                  </span>
                </p>
              </div>
            </div>

            <div className=" flex flex-row justify-end gap-2 mt-5">
              <Button className="w-fit uppercase">Check Out</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
