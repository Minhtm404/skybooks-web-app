import React from 'react';
import { Sidebar } from 'flowbite-react';
import { twMerge } from 'tailwind-merge';
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi';

const SidebarCustom = () => {
  return (
    <Sidebar className="py-5">
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
            <Sidebar.Item href="/collections/books">Books</Sidebar.Item>
            <Sidebar.Item href="/collections/posters">Posters</Sidebar.Item>
            <Sidebar.Item href="/collections/souvenirs">Souvenirs</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="/new-arrival">New arrival</Sidebar.Item>
          <Sidebar.Item href="/posts">Blog</Sidebar.Item>
          <Sidebar.Item href="/sale">Sale</Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarCustom;
