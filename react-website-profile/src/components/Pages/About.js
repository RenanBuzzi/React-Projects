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
      <div className="AboutCenterPage">
        <div>
          <img className="PhotoPerfil" src="images/Perfil.jpg" />
        </div>
        <div className="MainPhrase">Renan Buzzi</div>
        <div className="Phrase">
          <h2>Life: </h2>
          Good things happen when people can move, whether it’s across town or
          towards their dreams. Opportunities appear, open up, become reality.
          What started as a way to tap a button to take a trip has led to
          billions of moments of human connection as people around the world go
          to all kinds of places in all kinds of ways with the help of our
          technology.
        </div>
        <div className="Phrase">
          <h2>Education: </h2>
          Good things happen when people can move, whether it’s across town or
          towards their dreams. Opportunities appear, open up, become reality.
          What started as a way to tap a button to take a trip has led to
          billions of moments of human connection as people around the world go
          to all kinds of places in all kinds of ways with the help of our
          technology.
        </div>
        <div className="Phrase">
          <h2>Skills: </h2>
          Good things happen when people can move, whether it’s across town or
          towards their dreams. Opportunities appear, open up, become reality.
          What started as a way to tap a button to take a trip has led to
          billions of moments of human connection as people around the world go
          to all kinds of places in all kinds of ways with the help of our
          technology.
        </div>
        <div className="Phrase">
          <h2>Certificates: </h2>
          Good things happen when people can move, whether it’s across town or
          towards their dreams. Opportunities appear, open up, become reality.
          What started as a way to tap a button to take a trip has led to
          billions of moments of human connection as people around the world go
          to all kinds of places in all kinds of ways with the help of our
          technology.
        </div>
        <div className="Phrase">
          <h2>Rob: </h2>
          Good things happen when people can move, whether it’s across town or
          towards their dreams. Opportunities appear, open up, become reality.
          What started as a way to tap a button to take a trip has led to
          billions of moments of human connection as people around the world go
          to all kinds of places in all kinds of ways with the help of our
          technology.
        </div>
        <div>
          <img className="netWorkImage" src="images/t1.png" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
