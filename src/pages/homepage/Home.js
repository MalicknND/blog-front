import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Posts from '../../components/posts/Posts';
import SideBar from '../../components/Sidebar/SideBar';
import './Home.css';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:5000/api/posts');

      console.log(res);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
};

export default Home;
