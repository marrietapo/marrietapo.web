import React from "react";
import ThemeProvider from "./context/ThemeProvider";
import LanguageProvider from "./context/LanguageProvider";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <LanguageProvider>
          <AppRouter />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
