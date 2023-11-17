import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner, Toast } from 'flowbite-react';
import { HiExclamation } from 'react-icons/hi';

import { Context as AuthContext } from '../../contexts/AuthContext';

import { UserSidebar } from '../../components/index';

const Account = () => {
  const { user, isAuthenticated, localLogin, isLoading, setIsLoading, error } =
    useContext(AuthContext);

  const navigate = useNavigate();

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

        <div className="col-span-3 mb-3">
          <p className="text-3xl font-semibold my-5">User Profile</p>
        </div>
      </div>
    );
  }
};

export default Account;
