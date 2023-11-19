import React from 'react';
import { Button } from 'flowbite-react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';

const Cart = ({ closeCart }) => {
  return (
    <div
      className="bg-transparent w-full fixed top-0 right-0"
      style={{ 'z-index': 1000 }}
    >
      <div className="float-right h-screen duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-96 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <button
            type="button"
            onClick={() => closeCart()}
            style={{ color: '#99abb4' }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-full"
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className="flex items-center leading-8 gap-5 border-b-2 dark:border-gray-600 p-4">
          <img
            className="rounded-lg h-24 w-20"
            src="https://product.hstatic.net/200000090679/product/a11eaq8thkl_757a0ddca7b74dc7b30dfd32680930be_grande.jpg"
            alt=""
          />
          <div>
            <p className="font-semibold ">Product Name</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
              Product Category
            </p>
            <div className="flex gap-4 mt-2 items-center">
              <p className="font-semibold text-lg">{'100000'.concat('₫')}</p>
              <div className="flex items-center border-2 rounded">
                <p className="px-2 dark:border-gray-600 text-red-600">
                  <AiOutlineMinus />
                </p>
                <p className="px-2 border-x-2 dark:border-gray-600">0</p>
                <p className="px-2 dark:border-gray-600 text-green-600">
                  <AiOutlinePlus />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">100000</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">100000</p>
          </div>
        </div>
        <div className="mt-5">
          <Button className="w-full">Place Order</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;