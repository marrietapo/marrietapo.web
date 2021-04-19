import React, { useState } from "react";

export const LanguageContext = React.createContext("español");

const LanguageProvider = (props) => {

  const [language, setLanguage] = useState("español");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
