import React from 'react';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { Sidebar } from '../../components/index';

const ExchangePolicy = () => {
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
          <Breadcrumb.Item href="/exchange-policy">Exchange Policy</Breadcrumb.Item>
        </div>
      </Breadcrumb>

      <div className="mx-40 px-5 py-3 grid grid-cols-4">
        <Sidebar />
        <div className="col-span-3 mb-3">
          <p className="text-3xl font-semibold my-5">Exchange/Return Policy</p>

          <div className="text-sm space-y-4 gap-2">
            <div className="space-y-2">
              <div className="space-y-2">
                <p className="text-gray-900">
                  Dear customers!
                  <br />
                  With our interest to deliver the best shopping online experience.
                  <br />
                  Skybooks would like to announce our exchange/return policy as below:
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">1. Requirement</p>
                <p className="text-gray-900">
                  Skybooks accepts exchanges and returns for the following cases:
                  <br /> - The product is damaged during the delivery process.
                  <br />
                  Example: the product is dented, torn, damaged, the product no longer has
                  the same shape as the original during the delivery process to your
                  place.
                  <br /> - The product you receive is not the same as the description on
                  the website or from a salesman.
                  <br />
                  Example: wrong code, color, or size, etc.
                  <br /> - If your product is not on the list above, we have the right to
                  reject your exchange/ refund request.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">2. Exchanging time</p>
                <p className="text-gray-900">
                  The time depends on customers who send defective goods to Kakapo's
                  address and the delivery time from the shipping company.
                  <br />
                  We guarantee to exchange or return products as soon as possible.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">3. Regulations on exchange/return</p>
                <p className="text-gray-900">
                  - Same code: free exchange
                  <br /> - Different product code but with the same price: free exchange
                  <br /> - If the product you want that has a higher value than the one
                  you currently have (based on the bill): You will pay an additional
                  amount to get the new product according to the following formula:
                  <pre>
                    Additional amount = (new product’s value) – (old product’s value)
                  </pre>
                  - If the product you want that has a lower value than the one you
                  currently have (based on the bill): You will receive an amount of money
                  according to the following formula:
                  <pre>
                    The amount you receive = (Old product’s value) – (new product’s value)
                  </pre>
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

export default ExchangePolicy;
