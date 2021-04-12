import React, { useState } from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
  const themes = {
    light: {
      color: "#000",
      background: "#FFF",
    },
    dark: {
      color: "#ffffff",
      background: "#222222",
    },
  };

  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
