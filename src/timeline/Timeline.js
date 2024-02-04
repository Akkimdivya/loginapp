import React, { useState } from "react";
import Post from "./Post/Post";

import "./Timeline.css";

function Timeline() {
  const [posts] = useState([
    {
      user: "Divyaakkim",
      postImage:
        "https://upload.wikimedia.org/wikipedia/commons/a/ab/Monarch_Butterfly_Showy_Male_3000px.jpg",
      likes: 540,
      timestamp: "2d",
    },
    {
      user: "nishu",
      postImage:
        "https://images.singletracks.com/blog/wp-content/uploads/2016/09/IMG_1720.jpg",
      likes: 432,
      timestamp: "6d",
    },
    {
      user: "manohar",
      postImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      likes: 140,
      timestamp: "1d",
    },
    {
      user: "sri lakshmi",
      postImage:
        "https://support.musicgateway.com/wp-content/uploads/2021/03/Copy-of-800-x-500-Blog-Post-11-5.png",
      likes: 143,
      timestamp: "4d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default Timeline;
