import React, { useState } from 'react';

const HandleErrors = () => {
  const [error, setError] = useState(null);

  const fetchData = () => {
    setError(null);
    fetch('https://jsonplaceholder.typicode.com/invalid-endpoint')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .catch(err => setError(err.message));
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default HandleErrors;
