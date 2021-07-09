import React from "react";
import "../App.css";
import Footer from "./Footer";
import talk2beimg from "../images/Originav2.png";
import "../Pages/Home.css";
import Slider from "../SlideImages/Slider";
import SliderMobile from "../SliderMobileScreens/SliderMobileImages";

const Home = () => {
  return (
    <>
      <div className="main">
        <div>
          <img className="logoTalkToBee" src={talk2beimg} alt="Logo" />
        </div>
        <div className="TextWelcome">Welcome to the hive</div>
        <div className="middleText">
          talk2 Bee is a practical way to improve and maintain fluency in
          English! The way you interact with real people will enhance learning
          and create a positive experience.
        </div>
        <div className="finalText">Practice makes perfect</div>
      </div>
      <Slider />
      <SliderMobile />
      <Footer />
    </>
  );
};

export default Home;
