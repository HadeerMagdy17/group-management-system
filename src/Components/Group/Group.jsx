
import React, { useState, useEffect } from "react";
import PostForm from "../PostForm/PostForm";
import PostList from "../PostList/PostList";

const Group = ({ group, updateGroup, deleteGroup }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAddingPost, setIsAddingPost] = useState(false);
  const [name, setName] = useState(group.name);
  const [description, setDescription] = useState(group.description);
  const [posts, setPosts] = useState([]);

  const addPost = (groupId, post) => {
    setPosts([...posts, post]);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateGroup(group.id, { name, description });
    setIsEditing(false);
  };

  useEffect(() => {
    setName(group.name);
    setDescription(group.description);
  }, [group]);

  return (
    <>
      <th scope="row">{group.id}</th>
      <td>{isEditing ? (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
      ) : (
        group.name
      )}</td>
      <td>{isEditing ? (
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
        />
      ) : (
        group.description
      )}</td>
      <td>{new Date(group.createdAt).toLocaleString()}</td>
      <td>
        {isEditing ? (
          <button className="btn btn-primary mt-3" onClick={handleSave}>Edit</button>
        ) : (
          <>
            <i
              onClick={handleEdit}
              className="fa fa-edit text-success px-2"
            ></i>
            <i
              onClick={() => deleteGroup(group.id)}
              className="fa fa-trash text-danger"
            ></i>
          </>
        )}
      </td>
      <td>
        {isAddingPost ? (
          <>
            <PostForm addPost={addPost} groupId={group.id} />
            <PostList posts={posts} />
          </>
        ) : (
          <button className="btn btn-primary mt-3" onClick={() => setIsAddingPost(true)}>Add post</button>
        )}
      </td>
    </>
  );
};

export default Group;
