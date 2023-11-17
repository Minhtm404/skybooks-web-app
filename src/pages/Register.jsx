import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Label, Spinner, TextInput, Toast } from 'flowbite-react';
import { HiExclamation } from 'react-icons/hi';

import { Context as AuthContext } from '../contexts/AuthContext';

const Register = () => {
  const { register, isLoading, setIsLoading, error } = useContext(AuthContext);

  const navigate = useNavigate();

  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [passwordConfirm, setPasswordConfirm] = useState(undefined);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!name || !email || !password || !passwordConfirm) return;

    setIsLoading(true);
    await register({ name, email, password, passwordConfirm });

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
        Register
      </h3>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Your name" />
        </div>
        <TextInput
          id="name"
          name="name"
          type="text"
          placeholder="Name"
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
          placeholder="Email"
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
          placeholder="Password"
          minLength={8}
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="Confirm" value="Confirm password" />
        </div>
        <TextInput
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          placeholder="Confirm password"
          minLength={8}
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
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

            <span>Register</span>
          </div>
        </Button>
        <Button color="light" as={Link} to="/account/login">
          Back
        </Button>
      </div>
    </form>
  );
};

export default Register;
