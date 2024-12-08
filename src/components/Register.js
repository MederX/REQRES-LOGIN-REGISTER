import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://reqres.in/api/register', { email, password });
      setMessage('Registration successful!');
      console.log(response.data);
    } catch (error) {
      setMessage('Registration failed. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="auth-wrapper">
      <form onSubmit={handleRegister} className="auth-inner">
        <h3>Register</h3>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Register</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Register;
