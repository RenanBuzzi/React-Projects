import React from "react";
import "../App.css";
import Footer from "./Footer";
import about from "../Pages/About.css";

const About = () => {
  return (
    <>
      <div className="mainHeader">
        <div className="fisrtSquare"></div>
        <div className="secondSquare"></div>
      </div>
      <div className="aboutUs">
        <div className="title">About Us</div>
        <div className="subTitle">The hive of English loves.</div>
        <div className="text">
          We are English lovers, and like thousands of non-native speakers with
          an intermediate or higher level of English, we faced challenges to
          improve and maintain fluency. Studying is a solution, but interacting
          with real people (native or fluent English speakers) can enhance
          learning and create a positive experience. We built a hive of Business
          English Elite (Bee) to support your fluency acquisition by talking to
          thousands of Bee Speakers about business matters. Our Bee Speakers are
          business professionals and/or academic students, like you! So you can
          have real conversations, you only have to choose the area you want to
          talk with and pick a subject you wish to talk about. Then, talk2bee
          will schedule the meeting with the best match. The bee speaker is
          matched by your English level, your role, business experiences,
          availability, and your preferences.
        </div>
        <div className="title">Meet The Team</div>

        <div>
          <div>
            <div class="user one">
              <br></br>
              <h2>Elaine Buzzi</h2>
              <br></br>Cargo
            </div>
            <div class="user two">
              <br></br>
              <h2>Luckasz</h2>
              <br></br>Cargo
            </div>
            <div class="user three">
              <br></br>
              <h2>Thiago Kaizer</h2>
              <br></br>Cargo
            </div>
            <div class="user four">
              <br></br>
              <h2>Renan Buzzi</h2>
              <br></br>Cargo
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
