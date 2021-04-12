import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ThemeContext } from "../context/ThemeProvider";

const Main = () => {
  const { theme , themes} = React.useContext(ThemeContext);
  return (
    <div className="main">
      <Header />
      <Body />
      <Navbar />
      <Footer />
    </div>
  );
};

export default Main;
