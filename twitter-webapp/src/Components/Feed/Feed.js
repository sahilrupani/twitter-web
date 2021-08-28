import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "../../Css/Feed/Feed.css";
// import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

    
        {/* {posts.map((post) => ( */}
          <Post
            // key={post.text}
            // displayName={post.displayName}
            // username={post.username}
            // verified={post.verified}
            // text={post.text}
            // avatar={post.avatar}
            // image={post.image}
          />
        {/* ))} */}
     
    </div>
  );
}

export default Feed;
