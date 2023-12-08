import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sidebar } from 'flowbite-react';
import { twMerge } from 'tailwind-merge';
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi';

const SidebarCustom = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <Sidebar className="py-5">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Collapse
            label={t('header.about_us')}
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
              return (
                <IconComponent
                  aria-hidden
                  className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])}
                />
              );
            }}
          >
            <Sidebar.Item href="/about-us/stores">{t('header.stores')}</Sidebar.Item>
            <Sidebar.Item href="/about-us/contact-info">{t('header.contact_info')}</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse
            label={t('header.products')}
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
              return (
                <IconComponent
                  aria-hidden
                  className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])}
                />
              );
            }}
          >
            <Sidebar.Item href="/collections/books">{t('header.books')}</Sidebar.Item>
            <Sidebar.Item href="/collections/posters">{t('header.posters')}</Sidebar.Item>
            <Sidebar.Item href="/collections/souvenirs">{t('header.souvenirs')}</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="/new-arrival">{t('header.new_arrival')}</Sidebar.Item>
          <Sidebar.Item href="/posts">{t('header.blog')}</Sidebar.Item>
          <Sidebar.Item href="/sale">{t('header.sale')}</Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarCustom;
