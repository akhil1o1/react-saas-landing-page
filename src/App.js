import React from "react";
import {createTheme, ThemeProvider, Divider} from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Businesses from "./components/Businesses";
import Squares from "./components/Squares";
import About from "./components/About";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import Faqs from "./components/Faqs";
import Join from "./components/Join";

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
    <Divider orientation="horizontal"/>
    <Businesses/>
    <Divider orientation="horizontal"/>
    <Squares/>
    <About/>
    <Features/>
    <Testimonial/>
    <Faqs/>
    <Join/>
    </ThemeProvider>
  </>;
}

export default App;
