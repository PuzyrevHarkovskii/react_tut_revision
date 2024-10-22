import React from "react";
import style from "./Post.module.css";

const MyPost = () => {
  return (
    <div className={style.posts}>
      <div className={style.item}>
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/jewish-rabbi-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--torah-religious-leader-synagogue-avatars-pack-people-icons-9910415.png?f=webp" />
        Post 1<div>like</div>
      </div>
    </div>
  );
};

export default MyPost;