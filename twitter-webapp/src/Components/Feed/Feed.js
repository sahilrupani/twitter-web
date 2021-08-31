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
    // let auth_token = cookie('auth_token')
    // if(auth_token){
    //   getPosts()
    // }else{
    //   logout()
    // }
    getPosts()
    
  }, []);

  const logout = () => {
    document.cookie = 'emailId' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'userId' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'auth_token' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.replace("http://34.93.69.186/login")
  }

  const getPosts = () => {

    axios({
      method: "GET",
      url : "http://localhost:5000/api/v1/post/get",
      params : {
          user_id: cookie("userId")
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

      <div className="feed__header">
        <h2>Posts</h2>
      </div>

    
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.user_id}
            text={post.description}
            avatar={post.avatar}
          />
        ))}
     
    </div>
  );
}

export default Feed;
