import React from "react";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero/>
      <Skills/>
      <Portfolio />
      <About/>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
