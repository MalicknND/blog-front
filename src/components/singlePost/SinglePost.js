import './SinglePost.css';
const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem, ipsum dolor.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa fa-edit"></i>
            <i className="singlePostIcon fa fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>Malick</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          obcaecati, vitae, iusto quos iure aspernatur porro quisquam,
          laboriosam doloribus impedit reiciendis temporibus amet accusantium!
          Cumque officia vitae voluptas ex est. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Incidunt obcaecati, vitae, iusto quos
          iure aspernatur porro quisquam, laboriosam doloribus impedit
          reiciendis temporibus amet accusantium! Cumque officia vitae voluptas
          ex est. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Incidunt obcaecati, vitae, iusto quos iure aspernatur porro quisquam,
          laboriosam doloribus impedit reiciendis temporibus amet accusantium!
          Cumque officia vitae voluptas ex est. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Incidunt obcaecati, vitae, iusto quos
          iure aspernatur porro quisquam, laboriosam doloribus impedit
          reiciendis temporibus amet accusantium! Cumque officia vitae voluptas
          ex est.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
