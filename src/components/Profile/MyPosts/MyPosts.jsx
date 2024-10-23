import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>{" "}
      </div>
      <div className={style.posts}>
        <Post message="Hi, how r u?" likeCount="2" />
        <Post message="First post bitch!" likeCount="10" />
      </div>
    </div>
  );
};

export default MyPosts;
