import './post.css';

const Post = () => {
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
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
        exercitationem aspernatur minus fugiat, voluptatum cum sunt laboriosam
        maiores consequuntur non autem culpa veritatis sapiente vitae pariatur
        aliquid dolor temporibus commodi? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Dolorem exercitationem aspernatur minus
        fugiat, voluptatum cum sunt laboriosam maiores consequuntur non autem
        culpa veritatis sapiente vitae pariatur aliquid dolor temporibus
        commodi? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Dolorem exercitationem aspernatur minus fugiat, voluptatum cum sunt
        laboriosam maiores consequuntur non autem culpa veritatis sapiente vitae
        pariatur aliquid dolor temporibus commodi?
      </p>
    </div>
  );
};

export default Post;