import { Avatar } from '@material-ui/core'
import React from 'react';
import './Post.css';

import ThumbsupIcon from '@material-ui/icons/ThumbUpSharp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NearMeIcon from '@material-ui/icons/NearMeOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircleOutlined';
import ExpandMoreOutlineIcon from '@material-ui/icons/ExpandMoreOutlined';

const Post = ({profilePic, username, timestamp, imgName, message}) => {
    return (
      <div className="post">
        <div className="post__top">
          <Avatar src={profilePic} className="post__avatar" />
          <div className="post__topInfo">
            <h3>{username}</h3>
            <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
          </div>
        </div>
        <div className="post__content">
            <p>{message}</p>
        </div>
        <div className="post__bottom">
          <div className="post__options">
            <div className="post__option">
              <ThumbsupIcon />
              <p>Like</p>
            </div>
            <div className="post__option">
              <ChatBubbleIcon />
              <p>Comment</p>
            </div>
            <div className="post__option">
              <NearMeIcon />
              <p>Share</p>
            </div>
            <div className="post__option">
              <AccountCircleIcon />
              <ExpandMoreOutlineIcon />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Post
