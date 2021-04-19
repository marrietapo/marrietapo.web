import React, { useState } from "react";

export const LanguageContext = React.createContext("english");

const LanguageProvider = (props) => {

  const [language, setLanguage] = useState("english");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
