import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Label, Spinner, TextInput, Toast } from 'flowbite-react';
import { HiExclamation } from 'react-icons/hi';

import { Context as AuthContext } from '../../contexts/AuthContext';

import { UserSidebar } from '../../components/index';

const Account = () => {
  const {
    user,
    isAuthenticated,
    localLogin,
    updateMe,
    updatePassword,
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

  const handleUpdateData = async () => {
    setIsLoading(true);
    await updateMe({ name, email });
    setName(user.name);
    setEmail(user.email);
    setPhoneNumber(user.phoneNumber);
    setAddress(user.address);
  };

  const handleUpdatePassword = async () => {
    setIsLoading(true);
    await updatePassword({ passwordCurrent, password, passwordConfirm });
    setPasswordCurrent(undefined);
    setPassword(undefined);
    setPasswordConfirm(undefined);
  };

  useEffect(() => {
    setIsLoading(true);
    localLogin();

    if (!isAuthenticated) {
      navigate('/account/login');
    }
  }, []);

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

        <UserSidebar />

        <div className="col-span-3 m-2 md:m-10">
          <div className="flex flex-wrap justify-center gap-1">
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full pt-8 m-6">
              <form className="space-y-6" onSubmit={handleUpdateData}>
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                  Update user data
                </h3>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="Your name" />
                  </div>
                  <TextInput
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="md:w-1/2 sm:w-full"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                  </div>
                  <TextInput
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="md:w-1/2 sm:w-full"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="phoneNumber" value="Your phone number" />
                  </div>
                  <TextInput
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="md:w-1/2 sm:w-full"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="address" value="Your address" />
                  </div>
                  <TextInput
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Enter your address"
                    className="md:w-1/2 sm:w-full"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-row justify-end">
                  <Button type="submit">Update data</Button>
                </div>
              </form>
            </div>

            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full pt-8 m-6">
              <form className="space-y-6" onSubmit={handleUpdatePassword}>
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                  Update password
                </h3>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="currentPassword" value="Current pasword" />
                  </div>
                  <TextInput
                    id="currentPassword"
                    type="password"
                    placeholder="Enter your current password"
                    className="md:w-1/2 sm:w-full"
                    value={passwordCurrent}
                    onChange={e => setPasswordCurrent(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="newPassword" value="New password" />
                  </div>
                  <TextInput
                    id="newPassword"
                    type="password"
                    placeholder="Enter your new password"
                    className="md:w-1/2 sm:w-full"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="confirmPassword" value="Confirm password" />
                  </div>
                  <TextInput
                    id="confirmPassword"
                    type="password"
                    placeholder="Enter your confirm password"
                    className="md:w-1/2 sm:w-full"
                    value={passwordConfirm}
                    onChange={e => setPasswordConfirm(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-row justify-end">
                  <Button type="submit">Update password</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Account;
