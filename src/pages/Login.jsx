import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

const Login = () => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  return (
    <form
      className="grid content-center justify-center gap-4 my-16"
      style={{ 'grid-template-columns': '30rem' }}
    >
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
        <Link to="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
          Lost Password?
        </Link>
      </div>
      <div className="w-full">
        <Button>Log in to your account</Button>
      </div>
      <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered?&nbsp;
        <Link to="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
          Create account
        </Link>
      </div>
    </form>
  );
};

export default Login;
