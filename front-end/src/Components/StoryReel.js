import React from 'react'
import Story from './Story';
import './StoryReel.css';

const StoryReel = () => {
    return (
      <div className="storyReel">
        <Story
          image="https://c.ndtvimg.com/2020-10/gu0mp1sg_ms-dhoni-ravindra-jadeja-csk-bcciipl_625x300_02_October_20.jpg?q=60&imwidth=555"
          profileSrc="https://i1.rgstatic.net/ii/profile.image/610169692123136-1522487199639_Q512/Maharsh_Gheewala.jpg"
          title="Maharsh Hetal Gheewala"
        />
        <Story
          image="https://images.indianexpress.com/2019/04/kohli-rcb-759.jpg"
          profileSrc="https://i1.rgstatic.net/ii/profile.image/610169692123136-1522487199639_Q512/Maharsh_Gheewala.jpg"
          title="Rachana Bhaskar"
        />
        <Story
          image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201905/dc.jpeg?rgNfv4J.eXn45Aa1gYJrD6a0o.eyBiYN"
          profileSrc="https://i1.rgstatic.net/ii/profile.image/610169692123136-1522487199639_Q512/Maharsh_Gheewala.jpg"
          title="Harshit Agarwal"
        />
      </div>
    );
}

export default StoryReel

