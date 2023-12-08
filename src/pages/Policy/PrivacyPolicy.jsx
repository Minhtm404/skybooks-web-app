import React from 'react';
import { useTranslation } from 'react-i18next';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { Sidebar } from '../../components/index';

const PrivacyPolicy = () => {
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
          <Breadcrumb.Item href="/privacy-policy">
            {t('footer.privacy_policy')}
          </Breadcrumb.Item>
        </div>
      </Breadcrumb>

      <div className="mx-40 px-5 py-3 grid grid-cols-4">
        <Sidebar />

        <div className="col-span-3 mb-3">
          <p className="text-3xl font-semibold my-5">{t('footer.privacy_policy')}</p>

          <div className="text-base space-y-4 text-justify">
            <div className="space-y-2">
              <p className="font-semibold">{t('privacy_policy.part_1.header')}</p>
              <p className="text-gray-900">
                {t('privacy_policy.part_1.1')}
                <br />
                {t('privacy_policy.part_1.2')}
                <br />
                {t('privacy_policy.part_1.3')}
                <br />
                {t('privacy_policy.part_1.4')}
                <br />
                {t('privacy_policy.part_1.5')}
              </p>
              <p className="text-gray-900">{t('privacy_policy.part_1.6')}</p>
              <p className="text-gray-900">{t('privacy_policy.part_1.7')}</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">{t('privacy_policy.part_2.header')}</p>
              <p className="text-gray-900">
                {t('privacy_policy.part_2.1')}
                <br />
                {t('privacy_policy.part_2.2')}
                <br />
                {t('privacy_policy.part_2.3')}
                <br />
                {t('privacy_policy.part_2.4')}
                <br />
                {t('privacy_policy.part_2.5')}
                <br />
                {t('privacy_policy.part_2.6')}
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">{t('privacy_policy.part_3.header')}</p>
              <p className="text-gray-900">{t('privacy_policy.part_3.1')}</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">{t('privacy_policy.part_4.header')}</p>
              <p className="text-gray-900">
                {t('privacy_policy.part_4.1')}
                <br />
                {t('privacy_policy.part_4.2')}
                <br />
                {t('privacy_policy.part_4.3')}
                <br />
                {t('privacy_policy.part_4.4')}
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">{t('privacy_policy.part_5.header')}</p>
              <p className="text-gray-900">
                {t('privacy_policy.part_5.1')}
                <br />
                {t('privacy_policy.part_5.2')}
                <br />
                {t('privacy_policy.part_5.3')}
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">{t('privacy_policy.part_6.header')}</p>
              <p className="text-gray-900">{t('privacy_policy.part_6.1')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
