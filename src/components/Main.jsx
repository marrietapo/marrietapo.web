import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { ThemeContext } from "../context/ThemeProvider";

const Main = () => {
  const { theme , themes} = React.useContext(ThemeContext);
  return (
    <div className="main">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Main;
