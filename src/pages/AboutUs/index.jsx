import React from 'react';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { Sidebar } from '../../components/index';

const AboutUs = () => {
  return (
    <div>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-900"
      >
        <div className="flex mx-40">
          <Breadcrumb.Item href="/" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/about-us">About us</Breadcrumb.Item>
        </div>
      </Breadcrumb>

      <div className="mx-40 px-5 py-3 grid grid-cols-4">
        <Sidebar />
        <div className="col-span-3">
          <p className="text-3xl font-semibold my-5">About us</p>
          <div className="text-sm text-gray-500 space-y-2">
            <p>
              <span>
                After nearly two decades of development, our Skybooks Stores are now a
                chain of stores, covering the capital city of Hanoi, the ancient coastal
                village of Hoi An in the central of Vietnam, and Ho Chi Minh City, where
                you can find books on Vietnam in foreign languages and souvenirs from
                Vietnam.
              </span>
            </p>
            <p>
              <span>
                Apart from being a large distributor of foreign languages books on
                Vietnam, Skybooks is also the official distributor of the world famous
                publishers i.e. Cambridge, Cengage, Elsevier, John Wiley, Pearson,
                McGraw-Hill, Macmillan, Springer, Hachette, Penguin, Random House, Simon&
                Schuster, Wordsworth, Phaidon, Taschen, Page One, APD, Berkeley…
              </span>
            </p>
            <p>
              <span>
                The individual clients are always our important sector, however, Skybooks
                is proud to be the long term supplier for the Universities, Research
                Institutes, the famous international resorts/hotels and tourist sites in
                Vietnam and other local retail distributors with text books, reference
                books, books on international architecture, graphic design, fine art and
                literature, books introducing the land and peoples of Vietnam, and also
                souvenirs from Vietnam.
              </span>
            </p>
            <p>
              <span>
                The Skybooks Stores are highlighted in many travel guide books as well as
                tourism web sites as ‘the spots that can not be omitted while you are in
                Vietnam’. The Skybooks Stores have become the frequently visited sides of
                many resident as well as visiting foreigners.
              </span>
            </p>
            <p>
              <span>
                Visiting Skybooks Stores also means you are visiting a cozy ambient of
                Vietnam culture where your quest for exploration Vietnam is satisfied.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
