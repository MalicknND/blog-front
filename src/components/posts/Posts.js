import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import './Posts.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:5000/api/posts');
      setPosts(res.data);
      console.log(res);
    };
    fetchPosts();
  }, []);
  return (
    <div className="posts">
      {posts.map((item, index) => (
        <Post key={index} post={item} />
      ))}
    </div>
  );
};

export default Posts;
