import React, { useEffect, useState } from 'react';

const FetchPostsWithLoading = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? <div>Loading...</div> : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchPostsWithLoading;
