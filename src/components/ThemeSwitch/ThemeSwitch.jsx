import React from "react";
import "./switch.css";
import {ThemeContext} from './../../context/ThemeProvider';

export default function ThemeSwitch({ toggled, onClick }) {

  const { theme, setTheme, themes } = React.useContext(ThemeContext);

  const handleClick =()=>{
    if(theme == themes.light){
      setTheme(themes.dark);
    }else{
      setTheme(themes.light);
    }
  }

  return (
    <div onClick={handleClick}>

    <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`}>
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
