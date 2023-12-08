import React from 'react';
import { useTranslation } from 'react-i18next';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { Sidebar } from '../../components/index';

const Stores = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <div>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3"
      >
        <div className="flex mx-40">
          <Breadcrumb.Item href="/" icon={HiHome}>
            {t('body.home')}
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/about-us">{t('header.about_us')}</Breadcrumb.Item>
          <Breadcrumb.Item href="/about-us/stores">{t('header.stores')}</Breadcrumb.Item>
        </div>
      </Breadcrumb>

      <div className="mx-40 px-5 py-3 grid grid-cols-4">
        <Sidebar />

        <div className="col-span-3 mb-3">
          <p className="text-3xl font-semibold my-5">{t('header.stores')}</p>

          <div className="text-sm space-y-2">
            <div>
              <p className="font-semibold italic">{t('stores.part_1.header')}</p>
              <ul className="text-gray-900">
                <li>{t('stores.part_1.1')}</li>
                <li>{t('stores.part_1.2')}</li>
                <li>{t('stores.part_1.3')}</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold italic">{t('stores.part_2.header')}</p>
              <ul className="text-gray-900">
                <li>{t('stores.part_2.1')}</li>
                <li>{t('stores.part_2.2')}</li>
                <li>{t('stores.part_2.3')}</li>
                <li>{t('stores.part_2.4')}</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold italic">{t('stores.part_3.header')}</p>
              <ul className="text-gray-900">
                <li>{t('stores.part_3.1')}</li>
                <li>{t('stores.part_3.2')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stores;
