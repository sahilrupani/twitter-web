import React, { useState } from "react";
import "../../Css/Feed/TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import axios from 'axios'

function TweetBox(getTweets) {
  const cookie = key=>((new RegExp((key || '=')+'=(.*?); ','gm')).exec(document.cookie+'; ') ||['',null])[1]
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetList,setTweetList] = useState([])

  const sendTweet = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('user_id', cookie('userId'))
    fd.append('description', tweetMessage)
    axios.post(`http://localhost:5000/api/v1/post/insert`,fd)
    .then(resp => {
        if (resp?.data?.status === 200) {
          setTweetMessage("");
          // getTweets()
        }
    })

  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
