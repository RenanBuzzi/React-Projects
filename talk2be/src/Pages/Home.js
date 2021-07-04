import React from "react";
import "../App.css";
import Footer from "./Footer";
import talk2beimg from "../images/Originav2.jpg";
import "../Pages/Home.css";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="mainImage">
          <img className="mainHomePart1" src={talk2beimg} alt="Logo" />
        </div>
        <div className="mainTextWelcome">Welcome to the hive</div>
        <div className="mainText">
          talk2 Bee is a practical way to improve and maintain fluency in
          English! The way you interact with real people will enhance learning
          and create a positive experience.
        </div>
        <div className="mainText2">Practice makes perfect</div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
