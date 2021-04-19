import React from "react";

const MediaIcon = (props) => {
  const { item } = props;

  return (
    <div className="media_icon">
      <i className={item.class}></i>
      <span className="overlay">{item.text}</span>
    </div>
  );
};

export default MediaIcon;
