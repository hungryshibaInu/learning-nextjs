import { useState, useEffect } from 'react';
import Post from './Post.jsx';
import classes from './PostList.module.css';
import NewPost from './NewPost.jsx';
import Modal from './Modal.jsx';

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();

      setPosts(resData.posts);
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: { 'Content-Type': 'application/json' },
    });
    setPosts((prevPosts) => [postData, ...prevPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => {
            return <Post key={index} author={post.author} body={post.body} />;
          })}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no post yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
