import React, { useState } from 'react';

const PostForm = ({ groupId, addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addPost(groupId, { title, content });
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
         className="form-control"
        required
      />
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Post Content"
         className="form-control my-1"
        required
      />
      <button className='btn btn-primary' type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
