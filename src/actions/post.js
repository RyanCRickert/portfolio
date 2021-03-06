import uuid from "uuid";
import database from "../firebase/firebase";

export const addPost = (post) => ({
  type: "ADD_POST",
  post
});

export const startAddPost = (postData = {}) => {
  return (dispatch, getState) => {
    const {
      title = "",
      description = "",
      createdAt = 0
  } = postData;
    const post = { title, description, createdAt };

  return database.ref(`posts`).push(post).then((ref) => {
      dispatch(addPost({
        id: ref.key,
        ...post
      }));
    });
  };
};

export const removePost = ({ id } = {}) => ({
  type: "REMOVE_POST",
  id
});

export const startRemovePost = ({ id }) => {
  return (dispatch, getState) => {

    return database.ref(`posts/${id}`).remove().then(() => {
      dispatch(removePost({ id }));
    });
  };
};

export const editPost = (id, updates) => ({
  type: "EDIT_POST",
  id,
  updates
});

export const startEditPost = (id, updates) => {
  return (dispatch, getState) => {

    return database.ref(`posts/${id}`).update(updates).then(() => {
      dispatch(editPost(id, updates));
    });
  };
};

export const setPosts = (posts) => ({
  type: "SET_POSTS",
  posts
});

export const startSetPosts = () => {
  return (dispatch, getState) => {

    return database.ref(`posts`).once("value", (snapshot) => {
      const posts = [];

      snapshot.forEach((childSnapshot) => {
        posts.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setPosts(posts));
    });
  };
};