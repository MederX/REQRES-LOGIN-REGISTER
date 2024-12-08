import React, { useState, useEffect } from 'react';

const DebouncedSearch = () => {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    if (debouncedSearch) {
      fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${debouncedSearch}`)
        .then(response => response.json())
        .then(data => setPosts(data));
    }
  }, [debouncedSearch]);

  return (
    <div>
      <h2>Debounced Search</h2>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search posts"
      />
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DebouncedSearch;
