import React from 'react';
import { useTranslation } from 'react-i18next';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { Sidebar } from '../../components/index';

const AboutUs = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <div>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-900"
      >
        <div className="flex mx-40">
          <Breadcrumb.Item href="/" icon={HiHome}>
            {t('body.home')}
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/about-us">{t('header.about_us')}</Breadcrumb.Item>
        </div>
      </Breadcrumb>

      <div className="mx-40 px-5 py-3 grid grid-cols-4">
        <Sidebar />

        <div className="col-span-3 mb-3">
          <p className="text-3xl font-semibold my-5">{t('header.about_us')}</p>

          <div className="text-justify text-sm text-gray-900 space-y-2">
            <p>{t('about_us.1')}</p>
            <p>{t('about_us.2')}</p>
            <p>{t('about_us.3')}</p>
            <p>{t('about_us.4')}</p>
            <p>{t('about_us.5')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
