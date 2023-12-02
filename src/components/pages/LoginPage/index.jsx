import React from 'react';
import LoginForm from '../../forms/LoginForm';

const LoginPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
      <LoginForm isModal={false} />
    </div>
  );
};

export default LoginPage;