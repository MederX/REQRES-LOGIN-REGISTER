import React, { useState } from 'react';

const DynamicDataFetch = () => {
  const [userId, setUserId] = useState('');
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    if (!userId) return;
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(data => setPosts(data));
  };

  return (
    <div>
      <h2>Fetch Posts by User ID</h2>
      <input
        type="number"
        value={userId}
        onChange={e => setUserId(e.target.value)}
        placeholder="Enter user ID"
      />
      <button onClick={fetchPosts}>Fetch Posts</button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicDataFetch;
