import React from "react";
import BodyTitle from "./BodyTitle";
import BodyParagraph from "./BodyParagraph";
import Navbar from "./Navbar";

const Body = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="body">
        <BodyTitle />
        <BodyParagraph />
      </div>
    </div>
  );
};

export default Body;
