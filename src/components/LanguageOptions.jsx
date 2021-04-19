import React from 'react';
import { LanguageContext } from "./../context/LanguageProvider";

const LanguageOptions = () => {

    const {language, setLanguage} = React.useContext(LanguageContext);

    const handlerClick = () =>{
      if(language ==="english"){
        setLanguage("español");
      }else{
        setLanguage("english");
      }
    }

    return (
      <div className="header_lang_options pointer" onClick={handlerClick}>
        {language}
      </div>
    );
}

export default LanguageOptions;
