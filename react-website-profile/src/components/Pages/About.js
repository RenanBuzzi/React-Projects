import React from "react";
import "../../App.css";
import "./About.css";
import "../TypeMessage.css";
import Footer from "../Footer";

function About() {
  return (
    <>
      <div className="description-container">
        <video src="/videos/SourceCode.mp4" autoPlay loop muted></video>
        <div class="typewriter">
          <h1>a little bit of my personal life...</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
