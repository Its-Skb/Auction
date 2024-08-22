// src/pages/Login.js
import React from 'react';
import Auth from '../components/Auth';

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <Auth isLogin={true} />
    </div>
  );
};

export default Login;