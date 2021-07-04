import React from "react";
import "../../App.css";
// import Cards from '../Cards';
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import HomeCards from "../HomeCards";
import Slider from "./SlideImages/Slider";
import { Fragment } from "react";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Fragment>
        <Slider />
      </Fragment>
      {/* <HomeCards /> */}
      <Footer />
    </>
  );
};

export default Home;
