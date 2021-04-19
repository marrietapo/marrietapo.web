import React from 'react';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';
import LanguageOptions from './LanguageOptions';


const Header = () => {

    const [toggled, setToggled] = React.useState(false);
    
    const handleClick = () => {
       setToggled((s) => !s);
    };


    return (
      <div className="header">
        <LanguageOptions />
        <ThemeSwitch toggled={toggled} onClick={handleClick} />
      </div>
    );
}

export default Header
