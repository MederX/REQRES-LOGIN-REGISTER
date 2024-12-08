import React, { useState, useEffect, useRef } from 'react';

const InfiniteScrolling = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const loader = useRef(null);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        setPosts(prev => [...prev, ...data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [page]);

  useEffect(() => {
    const currentLoader = loader.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          console.log('Loader is in view, loading more posts...');
          setPage(prev => prev + 1);
        }
      },
      { threshold: 0.5 }
    );

    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [loading]);

  return (
    <div>
      <h2>Infinite Scrolling</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div ref={loader} style={{ height: '20px', backgroundColor: 'transparent' }}></div>
    </div>
  );
};
export default InfiniteScrolling;