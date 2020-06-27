import React from "react";

import {
  CssBaseline,
  StylesProvider,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core";

import "./App.css";

import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import NavBar from "../src/pages/NavBar/NavBar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#E67E22",
      dark: "#E36A00",
      light: "#E38C40"
    },
    secondary: {
      main: "#0d1011",
      dark: "#666666",
      light: "#616161"
    },
    background: { default: "#f9fafb" }
  },
  typography: {
    fontFamily: ["Raleway"].join(",")
  }
});

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Home />
          <About />
        </div>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
