import { Avatar, Input } from '@material-ui/core'
import React, { useState } from 'react';
import './MessageSender.css';

import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoCamIcon from "@material-ui/icons/Videocam";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticonOutlined";


const MessageSender = () => {
    const [input, setInput] = useState('');
    const [image, setImage] = useState(null);
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = (e) => {
      console.log("hello")
    };
    return (
      <div className="messageSender">
        <div className="messageSender__top">
          <Avatar src="https://i1.rgstatic.net/ii/profile.image/610169692123136-1522487199639_Q512/Maharsh_Gheewala.jpg" />
          <form>
            <input
              type="input"
              className="messageSender__input"
              placeholder="What's up for Today?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Input
              type="file"
              className="messageSender__fileSelector"
              onChange={handleChange}
            />
            <button onClick={handleSubmit} type="submit">
              Hidden Submit
            </button>
          </form>
        </div>
        <div className="messageSender__bottom">
          <div className="messageSender__option">
            <VideoCamIcon style={{ color: "red" }} />
            <h3>Live Video</h3>
          </div>
          <div className="messageSender__option">
            <PhotoLibraryIcon style={{ color: "green" }} />
            <h3>Photo/ Video</h3>
          </div>
          <div className="messageSender__option">
            <InsertEmoticonIcon style={{ color: "orange" }} />
            <h3>Feeling/Activity</h3>
          </div>
        </div>
      </div>
    );
}

export default MessageSender
