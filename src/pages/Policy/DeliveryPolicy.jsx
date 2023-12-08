import React from 'react';
import { useTranslation } from 'react-i18next';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { Sidebar } from '../../components/index';

const DeliveryPolicy = () => {
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
          <Breadcrumb.Item href="/delivery-policy">
            {t('footer.delivery_policy')}
          </Breadcrumb.Item>
        </div>
      </Breadcrumb>

      <div className="mx-40 px-5 py-3 grid grid-cols-4">
        <Sidebar />

        <div className="col-span-3 mb-3">
          <p className="text-3xl font-semibold my-5">{t('footer.delivery_policy')}</p>

          <div className="text-sm space-y-4 gap-2 text-justify">
            <div className="space-y-2">
              <p className="text-gray-900">{t('delivery_policy.description')}</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">{t('delivery_policy.part_1.header')}</p>
              <p className="text-gray-900">{t('delivery_policy.part_1.1')}</p>
              <p className="text-gray-900">{t('delivery_policy.part_1.2')}</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">{t('delivery_policy.part_2.header')}</p>
              <p className="text-gray-900">{t('delivery_policy.part_2.1')}</p>
              <p className="text-gray-900">{t('delivery_policy.part_2.2')}</p>
              <p className="text-gray-900">{t('delivery_policy.part_2.3')}</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">{t('delivery_policy.part_3.header')}</p>
              <p className="text-gray-900">{t('delivery_policy.part_3.1')}.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPolicy;
