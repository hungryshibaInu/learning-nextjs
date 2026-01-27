import Post from './Post.jsx';
import classes from './PostList.module.css';
import { useLoaderData } from 'react-router-dom';

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => {
            return <Post key={post.id} id={post.id} author={post.author} body={post.body} />;
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
