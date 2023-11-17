import React from 'react';
import { Sidebar } from 'flowbite-react';

const UserSidebar = () => {
  return (
    <Sidebar className="py-5">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/account">Account info</Sidebar.Item>
          <Sidebar.Item href="/orders">Your orders</Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default UserSidebar;
