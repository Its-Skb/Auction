// src/pages/Register.js
import React from 'react';
import Auth from '../components/Auth';

const Register = () => {
  return (
    <div>
      <h2>Register</h2>
      <Auth isLogin={false} />
    </div>
  );
};

export default Register;