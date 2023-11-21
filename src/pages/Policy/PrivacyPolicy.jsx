import React from 'react';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { Sidebar } from '../../components/index';

const PrivacyPolicy = () => {
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
          <Breadcrumb.Item href="/privacy-policy">Privacy Policy</Breadcrumb.Item>
        </div>
      </Breadcrumb>

      <div className="mx-40 px-5 py-3 grid grid-cols-4">
        <Sidebar />

        <div className="col-span-3 mb-3">
          <p className="text-3xl font-semibold my-5">Privacy Policy</p>

          <div className="text-base space-y-4 text-justify">
            <div className="space-y-2">
              <p className="font-semibold">a. Personal information gathering goals</p>
              <p className="text-gray-900">
                Data collected on the website includes:
                <br /> - Full name
                <br /> - Email
                <br /> - Phone number
                <br /> - Address
              </p>
              <p className="text-gray-900">
                Purpose: for us to confirm link when customers register to buy goods on
                the website to ensure the interests of customers.
              </p>
              <p className="text-gray-900">
                Customer will be solely responsible for the security and keep all
                activities using the service under registration of his name, password and
                email. In addition, the customer is responsible for promptly informing
                Skybooks of any unauthorized use, applicable, or third party information
                confidentiality scope for appropriate solutions.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">b. Scope of using information</p>
              <p className="text-gray-900">
                Skybooks uses the information provided by the customer to:
                <br /> - Providing customer related services.
                <br /> - Send notifications about information exchange activities between
                customers and Skybooks
                <br /> - Prevent activities that sabotage customer user accounts or
                activities that impersonate customers
                <br /> - Contacting and dealing with customers in special cases
                <br /> - In case of the request of competent law, Skybooks is responsible
                for cooperating in providing personal information to customers, including:
                Procuracy, court, police agency investigating behavior. violate any law of
                the customer. In addition, no one has the right to compromise the personal
                information of customers.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">c. Time to store information</p>
              <p className="text-gray-900">
                Skybooks will store the personal information provided by the customer on
                our internal systems during service provision to customers or until the
                purpose of information collection is completed or when the customer
                requests. request to destroy the information provided.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">
                d. People or organizations that may have access to that information
              </p>
              <p className="text-gray-900">
                Personal information on the website is allowed to be accessed by:
                <br /> - Website management
                <br /> - The customer owns that personal information
                <br /> - Legal authorities of Vietnam (when required)
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">
                e. The address of the unit that collects and manages the information
              </p>
              <p className="text-gray-900">
                Skybooks
                <br /> - Address: 1Bis Somewhere, Ward Y, District X, Hanoi City
                <br /> - Phone: +8428xxxxxxxx - Email: info@skybooks.io
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">
                f. Means and tools for users to access and correct their personal data
              </p>
              <p className="text-gray-900">
                Customers can exercise the right to access and correct personal data by
                accessing the account section on the website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
