import React from 'react';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { Sidebar } from '../../components/index';

const TermsOfService = () => {
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
          <Breadcrumb.Item href="/terms-of-service">Terms of Service</Breadcrumb.Item>
        </div>
      </Breadcrumb>

      <div className="mx-40 px-5 py-3 grid grid-cols-4">
        <Sidebar />
        
        <div className="col-span-3 mb-3">
          <p className="text-3xl font-semibold my-5">Terms of Service</p>

          <div className="text-sm text-gray-900 space-y-2 text-justify">
            <p className="bg-gray-100 border-2 rounded-lg p-2">
              General principles
              <br />
              Electronic website skybooks.xxx operated and operated by SKYBOOKS CO., LTD
              ("the Company").
              <br />
              Products and services participating in transactions on the skybooks.xxx
              E-commerce Website always satisfy all relevant provisions of law, not in the
              cases of business ban, advertising ban in accordance with the law.
              <br />
              Goods purchase and sale through skybooks.xxx E-commerce Website is always
              made public and transparent, ensuring the interests of consumers.
              <br />
              All contents in this Regulation must comply with the current legal system of
              Vietnam.
            </p>
            <p className="bg-gray-100 border-2 rounded-lg p-2">
              General rules
              <br />
              E-commerce Website Domain Name:
              <br />
              skybooks.xxx E-commerce Website is developed by Skybooks Company Limited
              with the domain name Website: www.skybooks.xxx (hereinafter referred to as
              "skybooks.xxx E-commerce Website")
              <br />
              General definition:
              <br /> - Buyers: are traders, organizations and individuals wishing to find
              out information about products and services posted on skybooks.xxx. Buyers
              may or may not need to register for an account on the website.
              <br /> - Members participating in transactions on the Website skybooks.xxx
              are traders, organizations and individuals wishing to buy and sell products
              and services on the website.
              <br /> - Members who register initially declare relevant personal
              information, are officially recognized by the Management Board of
              skybooks.xxx e-commerce and are allowed to use the services provided by
              skybooks.xxx E-commerce Website.
              <br /> -The content of this Regulation complies with the current regulations
              of Vietnam. Members participating in the skybooks.xxx E-commerce Website
              must find out about their legal responsibilities for the current laws of
              Vietnam and commit to strictly comply with the contents of the Regulations
              of skybooks.xxx
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
