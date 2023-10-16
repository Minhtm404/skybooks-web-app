import React from 'react';
import { Sidebar } from 'flowbite-react';
import { twMerge } from 'tailwind-merge';
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi';

const SidebarCustom = () => {
  return (
    <Sidebar className='py-5'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Collapse
            label="About us"
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
            <Sidebar.Item href="/about-us/stores">Stores</Sidebar.Item>
            <Sidebar.Item href="/about-us/contact-info">Contact info</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse
            label="Products"
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
            <Sidebar.Item href="/products/books">Books</Sidebar.Item>
            <Sidebar.Item href="/products/posters">Posters</Sidebar.Item>
            <Sidebar.Item href="/products/souvenirs">Souvenirs</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="/new-arrival">New arrival</Sidebar.Item>
          <Sidebar.Item href="/blog">Blog</Sidebar.Item>
          <Sidebar.Collapse
            label="Sale art"
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
            <Sidebar.Item href="/sale-art/15">Sale 15%</Sidebar.Item>
            <Sidebar.Item href="/sale-art/20">Sale 20%</Sidebar.Item>
            <Sidebar.Item href="/sale-art/25">Sale 25%</Sidebar.Item>
            <Sidebar.Item href="/sale-art/35">Sale 35%</Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarCustom;
