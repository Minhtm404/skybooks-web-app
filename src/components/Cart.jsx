import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from 'flowbite-react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';

import { Context as CartItemContext } from '../contexts/CartItemContext';

const Cart = ({ cartItems = [], closeCart }) => {
  const { updateCartItem, deleteCartItem } = useContext(CartItemContext);

  const navigate = useNavigate();

  const [t, i18n] = useTranslation('global');

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

  const handleViewCart = async () => {
    closeCart();

    navigate('/account/cart');
  };

  const handleCheckOut = async () => {
    closeCart();

    navigate('/account/checkout');
  };

  return (
    <div className="bg-half-transparent w-full h-full fixed top-0 right-0 p-0 overflow-y-scroll">
      <div className="float-right h-fit duration-1000 ease-in-out transition-all bg-gray-50 md:w-96 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">{t('cart.header')}</p>
          <button
            type="button"
            onClick={() => closeCart()}
            style={{ color: '#99abb4' }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-full"
          >
            <MdOutlineCancel />
          </button>
        </div>

        {cartItems &&
          cartItems.length > 0 &&
          cartItems.map(item => (
            <div className="flex items-center leading-8 gap-5 border-b-2 p-4">
              <img
                className="rounded-lg h-24 w-20"
                src={`${item.product?.imageCover}/-/preview/130x130/-/quality/smart_retina/-/format/auto/`}
                alt=""
              />
              <div>
                <div className="flex justify-between">
                  <p className="font-semibold ">
                    {item.product?.name ?? t('cart.product_not_exist')}
                  </p>
                  <button onClick={() => handleDelete(item._id)}>
                    <MdOutlineCancel />
                  </button>
                </div>

                <p className="text-gray-600 text-sm font-semibold">
                  {item.product?.mainCollection.name}
                </p>
                <div className="flex gap-4 mt-2 items-center">
                  <p className="font-semibold text-lg">
                    {(item.product?.price ?? 0).toLocaleString().concat('₫')}
                  </p>
                  <div className="flex items-center border-2 rounded">
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
                </div>
              </div>
            </div>
          ))}

        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">{t('cart.total')}</p>
            <p className="font-semibold">
              {(
                cartItems.reduce(
                  (sum, item) => sum + (item.product?.price ?? 0) * item.quantity,
                  0
                ) ?? 0
              )
                .toLocaleString()
                .concat('₫')}
            </p>
          </div>
        </div>

        <div className=" flex flex-row gap-2 mt-4">
          <Button color="light" className="w-full uppercase" onClick={handleViewCart}>
            {t('cart.view_cart')}
          </Button>
          <Button className="w-full uppercase" onClick={handleCheckOut}>
            {t('cart.check_out')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
