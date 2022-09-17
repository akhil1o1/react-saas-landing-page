import React from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Manrope',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  return <>
    <ThemeProvider theme={theme}>
    <Navbar/>
      <Hero/>
    </ThemeProvider>
  </>;
}

export default App;
