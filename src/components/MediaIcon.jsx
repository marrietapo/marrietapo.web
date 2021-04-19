import React from "react";

const MediaIcon = (props) => {
  const { item } = props;

  return (
    <div className="media_icon">
      <i className={item.icon} onClick={()=>window.open(item.link)}></i>
      <span className="overlay">{item.text}</span>
    </div>
  );
};

export default MediaIcon;
