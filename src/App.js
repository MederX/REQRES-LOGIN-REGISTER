// src/App.js
import React, { useState } from 'react';
import NavigationBar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setSelectedForm(null);
  };

  const handleSelect = (form) => {
    setSelectedForm(form);
  };

  return (
    <div>
      <NavigationBar onSelect={handleSelect} />
      <div className="container mt-4">
        {!isAuthenticated ? (
          <>
            {selectedForm === 'register' && <Register />}
            {selectedForm === 'login' && <Login onLogin={handleLogin} />}
          </>
        ) : (
          <Logout onLogout={handleLogout} />
        )}
      </div>
    </div>
  );
};

export default App;
