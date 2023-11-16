import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Checkbox, Label, Spinner, TextInput, Toast } from 'flowbite-react';
import { HiExclamation } from 'react-icons/hi';

import { Context as AuthContext } from '../contexts/AuthContext';

const Login = () => {
  const { login, isLoading, setIsLoading, error } = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!email || !password) return;

    setIsLoading(true);
    await login({ email, password });

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
        Login
      </h3>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
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
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Link
          to="/account/forgot-password"
          className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
        >
          Lost Password?
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

            <span>Log in to your account</span>
          </div>
        </Button>
      </div>
      <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered?&nbsp;
        <Link
          to="/account/register"
          className="text-cyan-700 hover:underline dark:text-cyan-500"
        >
          Create account
        </Link>
      </div>
    </form>
  );
};

export default Login;
