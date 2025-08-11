// pages/posts.js
import { useEffect, useState } from 'react';

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/posts') // Laravel endpoint
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
