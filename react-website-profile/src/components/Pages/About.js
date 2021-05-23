import React from "react";
import "../../App.css";
import "./About.css";
import "../TypeMessage.css";
import Footer from "../Footer";
import "../Pages/Carousel.css";
import CarouselAbout from "../Pages/CarouselAbout";

const About = () => {
  return (
    <>
      {/* <div className="description-container">
        <video src="/videos/SourceCode.mp4" autoPlay loop muted></video>
        <div class="typewriter">
          <h1>a little bit of my personal life...</h1>
        </div>
      </div> */}
      <div className="AboutCenterPage">
        <div>
          <img className="images" src="images/life2.jpg" />
        </div>
        <div className="Life">Life</div>
        <div className="SubTile">Who is Renan Buzzi?</div>
        <div className="Phrase">
          My name is Renan, I am from Brazil-born in 1988, I have four brothers
          being the middle child. I got married in 2016 and in 2018 we decided
          to take a risk crossing the ocean to try new experiences in England
          where I currently live in the city of London. As a person, I am a
          homely person, I like to stay at home watching a movie, series etc.
          Whenever possible, I travel to visit my friends who live here in
          Europe. One of my passions is programming and software architecture. I
          am always looking to improve my knowledge, participating in workshops
          and always seeking to update myself with new technologies.
        </div>
        <div>
          <img className="images" src="images/Education2.jpg" />
        </div>
        <div className="Education">Education</div>
        <div className="SubTile">Everything about my background.</div>
        <div className="Phrase">
          I am graduated in Information System at University Carlos Drummond de
          Andrade in 2010, and Post Graduate in Business Intelligence from the
          Institution (IBTA), Brazilian Institute of Advanced Technology in
          2012. I did my exchange in 2012, where I lived for about 1 year in
          Australia living in Sydney in 2018 I noticed another English course in
          the England city of London where I currently live. Two certifications
          at AGILE methodology. Scrum Master and Scrum fundamentals.
        </div>
        <div>
          <img className="images" src="images/Skills3.jpg" />
        </div>
        <div className="Skill">Skills</div>
        <div className="SubTile">My top skills.</div>
        <div className="Phrase">
          Good things happen when people can move, whether it’s across town or
          towards their dreams. Opportunities appear, open up, become reality.
          What started as a way to tap a button to take a trip has led to
          billions of moments of human connection as people around the world go
          to all kinds of places in all kinds of ways with the help of our
          technology.
        </div>
        <div>
          <img className="images" src="images/certificate1.jpg" />
        </div>
        <div className="Certificates">Certificates</div>
        <div className="SubTile">My achievements and certificates.</div>
        <CarouselAbout />
        <div className="Phrase">
          Good things happen when people can move, whether it’s across town or
          towards their dreams. Opportunities appear, open up, become reality.
          What started as a way to tap a button to take a trip has led to
          billions of moments of human connection as people around the world go
          to all kinds of places in all kinds of ways with the help of our
          technology.
        </div>

        <div>
          <img className="images" src="images/hobby2.jpg" />
        </div>
        <div className="Hobbies">Hobbies</div>
        <div className="SubTile">My passions in my spare time.</div>
        <div className="Phrase">
          Good things happen when people can move, whether it’s across town or
          towards their dreams. Opportunities appear, open up, become reality.
          What started as a way to tap a button to take a trip has led to
          billions of moments of human connection as people around the world go
          to all kinds of places in all kinds of ways with the help of our
          technology.
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
