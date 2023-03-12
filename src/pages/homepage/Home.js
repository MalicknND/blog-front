import React from 'react';
import Header from '../../components/Header/Header';
import Posts from '../../components/posts/Posts';
import SideBar from '../../components/Sidebar/SideBar';
import './Home.css';

const Home = () => {
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
