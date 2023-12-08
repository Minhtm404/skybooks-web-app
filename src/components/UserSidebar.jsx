import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Sidebar } from 'flowbite-react';

import { Context as AuthContext } from '../contexts/AuthContext';

const UserSidebar = ({ showModal }) => {
  const { logout } = useContext(AuthContext);

  const [t, i18n] = useTranslation('global');

  const handleOpenModal = async () => {
    showModal();
  };

  const handleLogout = async () => {
    logout();
  };

  return (
    <Sidebar className="py-5">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/account">{t('account.account_info')}</Sidebar.Item>
          <Sidebar.Item href="/account/orders">{t('account.my_orders')}</Sidebar.Item>
          <Sidebar.Item
            onClick={() => {
              handleOpenModal();
            }}
          >
            {t('account.delete_account')}
          </Sidebar.Item>
          <Sidebar.Item
            onClick={() => {
              handleLogout();
            }}
          >
            {t('account.logout')}
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default UserSidebar;
