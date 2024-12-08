import React from 'react';
const Logout = ({ onLogout }) => {
  return (
    <div className="auth-wrapper">
      <button className="btn btn-secondary btn-block" onClick={onLogout}>Logout</button>
    </div>
  );
};
export default Logout;
