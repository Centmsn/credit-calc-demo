import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import GlobalStyle from "./GlobalStyles";
import ThemeProvider from "./components/ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
