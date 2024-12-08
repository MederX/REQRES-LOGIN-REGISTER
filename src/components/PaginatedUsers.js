import React, { useState, useEffect } from 'react';

const PaginatedUsers = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const usersPerPage = 2;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const start = page * usersPerPage;
  const end = start + usersPerPage;
  const paginatedUsers = users.slice(start, end);

  return (
    <div>
      <h2>Paginated Users</h2>
      <ul>
        {paginatedUsers.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
      <button onClick={() => setPage(prev => Math.max(prev - 1, 0))}>Previous</button>
      <button onClick={() => setPage(prev => (end < users.length ? prev + 1 : prev))}>Next</button>
    </div>
  );
};

export default PaginatedUsers;
