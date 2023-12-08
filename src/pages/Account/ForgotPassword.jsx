import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Label, Spinner, TextInput, Toast } from 'flowbite-react';
import { HiExclamation } from 'react-icons/hi';

import { Context as AuthContext } from '../../contexts/AuthContext';

const ForgotPassword = () => {
  const { forgotPassword, isLoading, setIsLoading, error } = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState(undefined);

  const [t, i18n] = useTranslation('global');

  const handleSubmit = async e => {
    e.preventDefault();

    if (!email) return;

    setIsLoading(true);
    await forgotPassword({ email });

    navigate('/');
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
        {t('reset_password.header')}
      </h3>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value={t('reset_password.your_email')} />
        </div>
        <TextInput
          id="email"
          name="email"
          type="email"
          placeholder={t('reset_password.placeholder_email')}
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <Button type="submit">
          <div className="flex flex-row gap-2">
            {!isLoading ? (
              ''
            ) : (
              <Spinner aria-label="Alternate spinner button example" size="sm" />
            )}

            <span>{t('reset_password.submit_button')}</span>
          </div>
        </Button>
        <Button color="light" as={Link} to="/account/login">
        {t('reset_password.cancel_button')}
        </Button>
      </div>
    </form>
  );
};

export default ForgotPassword;
