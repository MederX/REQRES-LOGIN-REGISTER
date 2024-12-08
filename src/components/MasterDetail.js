import React, { useState } from 'react';

const MasterDetail = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  };

  const fetchUserDetail = id => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setSelectedUser(data));
  };

  useState(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Master-Detail View</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} onClick={() => fetchUserDetail(user.id)}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <div>
          <h3>User Details</h3>
          <p>Name: {selectedUser.name}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Phone: {selectedUser.phone}</p>
        </div>
      )}
    </div>
  );
};

export default MasterDetail;
