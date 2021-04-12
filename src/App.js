import React from "react";
import ThemeProvider from "./context/ThemeProvider";
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <AppRouter/>
      </ThemeProvider>
    </div>
  );
}

export default App;
