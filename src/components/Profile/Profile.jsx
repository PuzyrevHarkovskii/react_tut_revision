import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://resetdoc.b-cdn.net/wp-content/uploads/2021/11/ebrei-amazigh_slider.jpg" />
      </div>
      <div>Avatar + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
