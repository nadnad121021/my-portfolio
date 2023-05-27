import React from "react";
import logo from "./logo.svg";
// import './App.css';
import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import AboutMe from "./components/aboutme";
import Reviews from "./components/reviews";
import Contact from "./components/contact";
import Projects from "./components/projects";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <AboutMe />
      <Reviews />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
