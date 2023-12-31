import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Checkbox, Label, Spinner, TextInput, Toast } from 'flowbite-react';
import { HiExclamation } from 'react-icons/hi';

import { Context as AuthContext } from '../../contexts/AuthContext';

const Login = () => {
  const { isAuthenticated, login, isLoading, setIsLoading, error } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(-1);
    }
  });

  const [t, i18n] = useTranslation('global');

  const handleSubmit = async e => {
    e.preventDefault();

    if (!email || !password) return;

    setIsLoading(true);
    await login({ email, password });

    navigate('/account');
  };

  return (
    <form
      className="grid content-center justify-center gap-4 my-16"
      style={{ 'grid-template-columns': '30rem' }}
      onSubmit={handleSubmit}
    >
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

      <h3 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
        {t('login.header')}
      </h3>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value={t('login.your_email')} />
        </div>
        <TextInput
          id="email"
          name="email"
          type="email"
          placeholder={t('login.placeholder_email')}
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value={t('login.your_password')} />
        </div>
        <TextInput
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">{t('login.remember_me')}</Label>
        </div>
        <Link
          to="/account/forgot-password"
          className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
        >
          {t('login.lost_password')}
        </Link>
      </div>
      <div className="w-full">
        <Button type="submit">
          <div className="flex flex-row gap-2">
            {!isLoading ? (
              ''
            ) : (
              <Spinner aria-label="Alternate spinner button example" size="sm" />
            )}

            <span>{t('login.login_button')}</span>
          </div>
        </Button>
      </div>
      <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
        {t('login.not_registered')}&nbsp;
        <Link
          to="/account/register"
          className="text-cyan-700 hover:underline dark:text-cyan-500"
        >
          {t('login.create_account')}
        </Link>
      </div>
    </form>
  );
};

export default Login;
