import React from "react";
import { createTheme, ThemeProvider, Divider } from "@mui/material";
import "./App.css";
import Hero from "./components/Hero";
import Businesses from "./components/Businesses";
import Squares from "./components/Squares";
import About from "./components/About";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import Faqs from "./components/Faqs";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import JoinWaitlist from "./components/JoinWaitlist";
import Copyright from "./components/Copyright";
import Navbar from "./components/Navbar";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Manrope",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Hero />
        <Divider orientation="horizontal" />
        <Businesses />
        <Divider orientation="horizontal" />
        <Squares />
        <About />
        <Features />
        <Testimonial />
        <Faqs />
        <Subscribe />
        <JoinWaitlist />
        <Divider className="footer-divider" orientation="horizontal" />
        <Footer />
        <Divider className="footer-divider" orientation="horizontal" />
        <Copyright />
      </ThemeProvider>
    </>
  );
}

export default App;
