import React from 'react';
import { useTranslation } from 'react-i18next';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { Sidebar } from '../../components/index';

const PaymentPolicy = () => {
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
          <Breadcrumb.Item href="/payment-policy">
            {t('footer.payment_policy')}
          </Breadcrumb.Item>
        </div>
      </Breadcrumb>

      <div className="mx-40 px-5 py-3 grid grid-cols-4">
        <Sidebar />

        <div className="col-span-3 mb-3">
          <p className="text-3xl font-semibold my-5">{t('footer.payment_policy')}</p>

          <div className="text-sm space-y-4 gap-2 text-justify">
            <div className="space-y-2">
              <div className="space-y-2">
                <p className="text-gray-900">{t('payment_policy.description')}</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">{t('payment_policy.part_1.header')}</p>
                <p className="text-gray-900">
                  {t('payment_policy.part_1.1')}
                  <br />
                  {t('payment_policy.part_1.2')}
                  <br />
                  {t('payment_policy.part_1.3')}
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">{t('payment_policy.part_2.header')}</p>
                <p className="text-gray-900">
                  {t('payment_policy.part_2.1')}
                  <br />
                  {t('payment_policy.part_2.2')}
                </p>
              </div>
            </div>

            <div>
              <p>
                {t('payment_policy.part_3.1')}
                <br />
                {t('payment_policy.part_3.2')}
                <br />
                {t('payment_policy.part_3.3')}
                <br />
                {t('payment_policy.part_3.4')}
                <br />
                {t('payment_policy.part_3.5')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPolicy;
