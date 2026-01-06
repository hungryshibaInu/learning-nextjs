import { useState } from 'react';
import Post from './Post.jsx';
import classes from './PostList.module.css';
import NewPost from './NewPost.jsx';

function PostList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Jane Smith" body="Another sample post body." />
      </ul>
    </>
  );
}

export default PostList;
