import React from 'react';
import { useTranslation } from 'react-i18next';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { Sidebar } from '../../components/index';

const TermsOfService = () => {
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
          <Breadcrumb.Item href="/terms-of-service">
            {t('footer.terms_of_service')}
          </Breadcrumb.Item>
        </div>
      </Breadcrumb>

      <div className="mx-40 px-5 py-3 grid grid-cols-4">
        <Sidebar />

        <div className="col-span-3 mb-3">
          <p className="text-3xl font-semibold my-5">{t('footer.terms_of_service')}</p>

          <div className="text-sm text-gray-900 space-y-2 text-justify">
            <p className="bg-gray-100 border-2 rounded-lg p-2">
              {t('terms_of_service.description_1.1')}
              <br />
              {t('terms_of_service.description_1.2')}
              <br />
              {t('terms_of_service.description_1.3')}
              <br />
              {t('terms_of_service.description_1.4')}
              <br />
              {t('terms_of_service.description_1.5')}
            </p>
            <p className="bg-gray-100 border-2 rounded-lg p-2">
              {t('terms_of_service.description_2.1')}
              <br />
              {t('terms_of_service.description_2.2')}
              <br />
              {t('terms_of_service.description_2.3')}
              <br />
              {t('terms_of_service.description_2.4')}
              <br />
              {t('terms_of_service.description_2.5')}
              <br />
              {t('terms_of_service.description_2.6')}
              <br />
              {t('terms_of_service.description_2.7')}
              <br />
              {t('terms_of_service.description_2.8')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
