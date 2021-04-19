import React from 'react';
import MediaIcon from './MediaIcon';


const SocialMediaIcons = () => {

    const items = [
      {
        icon: "fab fa-github-alt fa-2x",
        text: "GitHub",
        link: "https://github.com/marrietapo",
      },
      {
        icon: "fab fa-linkedin-in fa-2x",
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/marrietapo",
      },
      {
        icon: "fab fa-instagram fa-2x",
        text: "Instagram",
        link: "https://www.instagram.com/marrietapo/",
      },
      {
        icon: "fab fa-spotify fa-2x",
        text: "Spotify",
        link:
          "https://open.spotify.com/user/m.arrieta?si=NjpO7ir9T4GKnnC5cux4Pw",
      },
    ];

    return (
      <div className="social_media_icons">
        {items.map((item, key) => (
          <MediaIcon item={item} key={key}/>
        ))}
      </div>
    );
}

export default SocialMediaIcons;
