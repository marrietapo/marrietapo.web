import React from "react";
import "./switch.css";
import {ThemeContext} from './../../context/ThemeProvider';

export default function ThemeSwitch({ toggled, onClick }) {

  const { theme, setTheme } = React.useContext(ThemeContext);

  const handleClick =()=>{
    if(theme === "dark"){
      setTheme("light");
    }else{
      setTheme("dark");
    }
  }

  return (
    <div onClick={handleClick} className="header_theme_switch">

    <div onClick={onClick} className={`toggle${ toggled ? " night" : ""}`}>
      <div className="notch">
        <div className="crater" />
        <div className="crater" />
      </div>
      <div>
        <div className="shape sm" />
        <div className="shape sm" />
        <div className="shape md" />
        <div className="shape lg" />
      </div>
    </div>
    </div>
  );
}
