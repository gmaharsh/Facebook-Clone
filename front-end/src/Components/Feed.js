import React from 'react';
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
import Post from './Post';

const Feed = () => {
    return (
      <div className="feed">
        <StoryReel />
        <MessageSender />
        <Post
          profilePic="https://avatars1.githubusercontent.com/u/18025028?s=460&u=fde38e6ea682a65fdde7ce4bb522f1ec808cac41&v=4"
          message="Hello, this is my Facebook App"
          timestamp="1601493943737"
          imgName="imgName"
          username="gmaharsh"
        />
      </div>
    );
}

export default Feed
