import React from 'react';
import MediaIcon from './MediaIcon';


const SocialMediaIcons = () => {

    const items = [
      {
        class: "fab fa-github-alt fa-2x",
        text: "GitHub",
      },
      {
        class: "fab fa-linkedin-in fa-2x",
        text: "LinkedIn",
      },
      {
        class: "fab fa-instagram fa-2x",
        text: "Instagram",
      },
      {
        class: "fab fa-spotify fa-2x",
        text: "Spotify",
      },
    ];

    return (
      <div className="social_media_icons">
        {items.map((item) => (
          <MediaIcon item={item} key={item.id}/>
        ))}
      </div>
    );
}

export default SocialMediaIcons;
