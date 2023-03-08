import Sidebar from '../../components/Sidebar/SideBar';
import SinglePost from '../../components/singlePost/SinglePost';
import './Single.css';

const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;
