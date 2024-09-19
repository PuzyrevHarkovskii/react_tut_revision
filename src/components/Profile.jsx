import React from "react";
import style from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img src="https://resetdoc.b-cdn.net/wp-content/uploads/2021/11/ebrei-amazigh_slider.jpg" />
      </div>
      <div>Avatar + description</div>
      <div>
        My posts
        <div>New post</div>
        <div className={style.posts}>
          <div className={style.item}>Post 1</div>
          <div className={style.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
