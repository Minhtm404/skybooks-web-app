import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Label, Modal, Spinner, TextInput, Toast } from 'flowbite-react';
import { HiExclamation, HiOutlineExclamationCircle } from 'react-icons/hi';

import { Context as AuthContext } from '../../contexts/AuthContext';

import { UserSidebar } from '../../components/index';

const Account = () => {
  const {
    user,
    isAuthenticated,
    localLogin,
    updateMe,
    updatePassword,
    deleteAccount,
    isLoading,
    setIsLoading,
    error
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);
  const [address, setAddress] = useState(user?.address);
  const [passwordCurrent, setPasswordCurrent] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [passwordConfirm, setPasswordConfirm] = useState(undefined);
  const [comparePassword, setComparePassword] = useState(true);

  const [openModal, setOpenModal] = useState(false);

  const handleUpdateData = async e => {
    e.preventDefault();
    setIsLoading(true);
    await updateMe({ name, email, phoneNumber, address });
  };

  const handleUpdatePassword = async e => {
    e.preventDefault();
    if (comparePassword) {
      setIsLoading(true);
      await updatePassword({ passwordCurrent, password, passwordConfirm });
      setPasswordCurrent(undefined);
      setPassword(undefined);
      setPasswordConfirm(undefined);
    }
  };

  const handleDeleteAccount = async () => {
    await deleteAccount();
  };

  useEffect(() => {
    setIsLoading(true);
    localLogin();

    if (!isAuthenticated) {
      setIsLoading(false);
      navigate('/account/login');
    }
  }, [isAuthenticated]);

  const [t, i18n] = useTranslation('global');

  if (isLoading) {
    return (
      <div className="relative w-full h-screen flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    );
  }

  if (user) {
    return (
      <div className="mx-40 px-5 py-3 grid grid-cols-4">
        {error ? (
          <Toast className="absolute top-4 left-4">
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
              <HiExclamation className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">{error}</div>
            <Toast.Toggle />
          </Toast>
        ) : (
          <></>
        )}

        <UserSidebar showModal={() => setOpenModal(true)} />

        <div className="col-span-3 m-2 md:m-10">
          <div className="flex flex-wrap justify-center gap-1">
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full pt-8 m-6">
              <form className="space-y-6" onSubmit={handleUpdateData}>
                <h3 className="text-2xl font-medium text-gray-900">
                  {t('account.account_info')}
                </h3>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value={t('account.your_name')} />
                  </div>
                  <TextInput
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t('account.placeholder_name')}
                    className="md:w-1/2 sm:w-full"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value={t('account.your_email')} />
                  </div>
                  <TextInput
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t('account.placeholder_email')}
                    className="md:w-1/2 sm:w-full"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="phoneNumber" value={t('account.your_phone')} />
                  </div>
                  <TextInput
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder={t('account.placeholder_phone')}
                    className="md:w-1/2 sm:w-full"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="address" value={t('account.your_address')} />
                  </div>
                  <TextInput
                    id="address"
                    name="address"
                    type="text"
                    placeholder={t('account.placeholder_address')}
                    className="md:w-1/2 sm:w-full"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-row justify-end">
                  <Button type="submit"> {t('account.update_data_button')}</Button>
                </div>
              </form>
            </div>

            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full pt-8 m-6">
              <form className="space-y-6" onSubmit={handleUpdatePassword}>
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                  {t('account.update_password')}
                </h3>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="currentPassword"
                      value={t('account.current_password')}
                    />
                  </div>
                  <TextInput
                    id="currentPassword"
                    type="password"
                    placeholder={t('account.placeholder_current_password')}
                    className="md:w-1/2 sm:w-full"
                    value={passwordCurrent}
                    onChange={e => setPasswordCurrent(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="newPassword" value={t('account.new_password')} />
                  </div>
                  <TextInput
                    id="newPassword"
                    type="password"
                    placeholder={t('account.placeholder_new_password')}
                    className="md:w-1/2 sm:w-full"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="confirmPassword"
                      value={t('account.confirm_password')}
                    />
                  </div>
                  <TextInput
                    id="passwordConfirm"
                    type="password"
                    placeholder={t('account.placeholder_confirm_password')}
                    className="md:w-1/2 sm:w-full"
                    value={passwordConfirm}
                    onChange={e => {
                      setPasswordConfirm(e.target.value);
                      setComparePassword(e.target.value === password);
                    }}
                    helperText={
                      comparePassword ? undefined : (
                        <span className="text-red-600">{t('account.compare_error')}</span>
                      )
                    }
                    required
                  />
                </div>

                <div className="flex flex-row justify-end">
                  <Button type="submit">{t('account.update_password_button')}</Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                {t('account.delete_modal')}
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="failure" onClick={() => handleDeleteAccount()}>
                  {t('account.delete_confirm')}
                </Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  {t('account.delete_cancel')}
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
};

export default Account;
