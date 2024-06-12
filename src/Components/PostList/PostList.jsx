import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div>
      <h3>Group Posts</h3>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
