import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { ThemeContext } from "../context/ThemeProvider";

const Main = () => {
  const { theme, themes } = React.useContext(ThemeContext);

  return theme === "dark" ? (
    <div
      className="main"
      style={{
        color: themes.dark.color,
        backgroundColor: themes.dark.background,
      }}
    >
      <Header />
      <Body />
      <Footer />
    </div>
  ) : (
    <div
      className="main"
      style={{
        color: themes.light.color,
        backgroundColor: themes.light.background,
      }}
    >
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Main;
