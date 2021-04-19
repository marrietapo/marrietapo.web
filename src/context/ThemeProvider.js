import React, { useState } from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
  const themes = {
    light: {
      foreground: "rgba(33, 33, 33, 1)",
      color: "rgba(33, 33, 33, 1)",
      background: "rgba(242, 242, 242, 0.9)",
    },
    dark: {
      foreground: "rgba(240, 240, 240, 1)",
      color: "rgba(240, 240, 240, 1)",
      background: "rgba(33, 33, 33, 0.9)",
    },
  };
  const [theme, setTheme] = useState("dark");


  return (
    <ThemeContext.Provider value={ {theme , themes, setTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
