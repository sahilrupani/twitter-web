import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "../../Css/Feed/Feed.css";
// import FlipMove from "react-flip-move";
import axios from 'axios'

function Feed() {
  const [posts, setPosts] = useState([]);
  const cookie = key=>((new RegExp((key || '=')+'=(.*?); ','gm')).exec(document.cookie+'; ') ||['',null])[1]

  useEffect(() => {
    getPosts()
  }, []);


  const getPosts = () => {

    axios({
      method: "GET",
      url : "http://localhost:5000/api/v1/post/get",
      params : {
          user_id: this.cookie("userId")
      }
      
    }).then((resp) => {
      if(resp?.data?.status == 200){
        setPosts(resp?.data?.data)
      }else{
        
      }
    })
  }

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox 
        getPosts={getPosts}
      />

    
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.user_name}
            text={post.description}
            avatar={post.avatar}
          />
        ))}
     
    </div>
  );
}

export default Feed;
