import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://pngimg.com/d/magen_david_PNG16.png" />
      </header>
      <nav className="nav">
        <div>
          <a>PROFILE</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://resetdoc.b-cdn.net/wp-content/uploads/2021/11/ebrei-amazigh_slider.jpg" />
        </div>
        <div>Avatar + description</div>
        <div>
          My posts
          <div>New post</div>
          <div>
            <div>Post 1</div>
            <div>Post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
