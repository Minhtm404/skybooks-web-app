import React, { useContext } from 'react';
import { Sidebar } from 'flowbite-react';

import { Context as AuthContext } from '../contexts/AuthContext';

const UserSidebar = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    logout();
  };

  return (
    <Sidebar className="py-5">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/account">Account info</Sidebar.Item>
          <Sidebar.Item href="/account/orders">My orders</Sidebar.Item>
          <Sidebar.Item
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default UserSidebar;
