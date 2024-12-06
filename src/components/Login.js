// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://reqres.in/api/login', { email, password });
      setMessage('Login successful!');
      onLogin();
      console.log(response.data);
    } catch (error) {
      setMessage('Login failed. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="auth-wrapper">
      <form onSubmit={handleLogin} className="auth-inner">
        <h3>Login</h3>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Login</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Login;
