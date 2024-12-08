import React, { useState, useEffect } from 'react';
const FetchAndCache = () => {
  const [users, setUsers] = useState([]);
  const [cached, setCached] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cached) return;

    const fetchUsers = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setUsers(data);
          setCached(true);
        })
        .catch(error => {
          setError(error.message);
        });
    };

    fetchUsers();
  }, [cached]);

  return (
    <div>
      <h2>Cached Users</h2>
      {error && <p>Error: {error}</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchAndCache;
