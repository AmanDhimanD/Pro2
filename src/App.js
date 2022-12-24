import React from "react-dom";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Header from "./components/Header";
import Project from "./components/Project";
import Certificate from "./components/Certificate";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Project />
      <Education />
      {/* <Skills/> */}
      <Certificate />
      <Experience/>
    </>
  );
}

export default App;
