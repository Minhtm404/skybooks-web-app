import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGl, { Marker } from 'react-map-gl';

import { Button, Breadcrumb, TextInput, Textarea } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

const ContactInfo = () => {
  const [viewport, setViewport] = useState({
    latitude: 21.03287159870468,
    longitude: 105.84461947287288,
    width: '100vw',
    height: '100vh',
    zoom: 14
  });

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
          <Breadcrumb.Item href="/about-us/contact-info">
            {t('header.contact_info')}
          </Breadcrumb.Item>
        </div>
      </Breadcrumb>

      <div className="py-3 grid grid-cols-2 divide-x">
        <div className="px-14 py-3">
          <ReactMapGl
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
            {...viewport}
            onDrag={viewport => setViewport(viewport)}
            onZoom={viewport => setViewport(viewport)}
          >
            <Marker latitude={21.03287159870468} longitude={105.84461947287288}></Marker>
          </ReactMapGl>
        </div>

        <div className="px-14 py-3">
          <p className="text-3xl font-bold my-9">{t('header.contact_info')}</p>
          <hr />
          <ul className="text-sm space-y-8 mt-14 mb-14">
            <li>
              <p className="text-gray-900 font-medium">{t('contact_info.part_1.1')}</p>
              <p className="font-bold">{t('contact_info.part_1.2')}</p>
            </li>
            <li>
              <p className="text-gray-900 font-medium">{t('contact_info.part_1.3')}</p>
              <p className="font-bold uppercase">{t('contact_info.part_1.4')}</p>
            </li>
            <li>
              <p className="text-gray-900 font-medium">{t('contact_info.part_1.5')}</p>
              <p className="font-bold">{t('contact_info.part_1.6')}</p>
            </li>
            <li>
              <p className="text-gray-900 font-medium">{t('contact_info.part_1.7')}</p>
              <p className="font-bold">{t('contact_info.part_1.8')}</p>
            </li>
          </ul>

          <p className="text-2xl font-bold my-5">{t('contact_info.part_2.header')}</p>
          <hr />
          <div className="text-sm space-y-8 mt-12">
            <TextInput
              id="name"
              placeholder={t('contact_info.part_2.fullname')}
              type="text"
              required
            />
            <div className="grid grid-cols-2 gap-8">
              <TextInput
                id="email"
                placeholder={t('contact_info.part_2.email')}
                type="email"
                required
              />
              <TextInput
                id="phone"
                placeholder={t('contact_info.part_2.phone_number')}
                type="tel"
                required
              />
            </div>
            <Textarea
              id="message"
              placeholder={t('contact_info.part_2.message')}
              rows={5}
              required
            />
            <Button size="xs" className="uppercase font-bold px-4 py-3">
              {t('contact_info.part_2.submit')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
