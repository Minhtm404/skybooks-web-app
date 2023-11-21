import React from 'react';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { Sidebar } from '../../components/index';

const PaymentPolicy = () => {
  return (
    <div>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3"
      >
        <div className="flex mx-40">
          <Breadcrumb.Item href="/" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/payment-policy">Payment Policy</Breadcrumb.Item>
        </div>
      </Breadcrumb>

      <div className="mx-40 px-5 py-3 grid grid-cols-4">
        <Sidebar />
        
        <div className="col-span-3 mb-3">
          <p className="text-3xl font-semibold my-5">Payment Policy</p>

          <div className="text-sm space-y-4 gap-2 text-justify">
            <div className="space-y-2">
              <div className="space-y-2">
                <p className="text-gray-900">
                  With our interest to deliver the best shopping online experience.
                  Skybooks accepts 2 types of payment that offer more flexibility and
                  convenience during the purchase process.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">1. COD - Cash on delivery</p>
                <p className="text-gray-900">
                  With COD, our customer only pays when the products are delivered and pay
                  the exact amount that is written on the bill. If the deliver demands an
                  additional fee outside of the bill, please contact us for help.
                  <br /> - Hotline: +8428xxxxxxxx
                  <br /> - Email: info@arskybooks.io
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">2. Bank transfer</p>
                <p className="text-gray-900">
                  With this method, after the products are successfully ordered on the
                  website, please finalize your payment follow instructions.
                  <br />
                  After the payment is done and Skybooks receives the money, we will
                  deliver products according to the time specified in Delivery Policy.
                </p>
              </div>
            </div>

            <div>
              <p>
                If you have any further questions, please contact:
                <br />
                Hotline: +8428xxxxxxxx
                <br />
                Website: skybooks.xxx
                <br />
                Email: info@skybooks.io
                <br />
                Let start shopping with Skybooks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPolicy;
