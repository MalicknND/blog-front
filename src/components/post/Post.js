import './post.css';

const Post = ({ post }) => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/12679999/pexels-photo-12679999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
        </div>
        <span className="postTitle">{post.title}</span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.description}</p>
    </div>
  );
};

export default Post;
