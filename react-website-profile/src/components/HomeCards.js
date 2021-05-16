import React from "react";
import "./HomeCards.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const HomeCards = () => {
  const Contact = (props) => <Link to="/Contact" {...props} />;
  const About = (props) => <Link to="/About" {...props} />;
  const Career = (props) => <Link to="/Career" {...props} />;
  return (
    <>
      <div className="waveTop">
        <div className="homePhrase">
          Welcome to my Profile!
          <div className="homeSecondPhrase">
            Feel free to check all details, and to contact me anytime.
          </div>
        </div>
        <div>
          <img className="netWorkHomePage" src="images/t1.png" />
        </div>
      </div>
      <div className="bodyCards">
        <div className="container">
          {/* CARD ONE */}
          <div className="card">
            <div className="imgBx">
              <img src="images/businessMan.jpg" />
            </div>
            <div className="content">
              <h2>About Me</h2>
              <p>
                My name is Renan Buzzi, I am from Brazil with Italian
                citizenship. I live in London since 2018...
              </p>
              <div className="btn">
                <Button
                  size="large"
                  variant="outlined"
                  color="secondary"
                  component={About}
                >
                  About Me
                </Button>
              </div>
            </div>
          </div>

          {/* CARD TWO */}
          <div className="card">
            <div className="imgBx">
              <img src="images/Contact.jpg" />
            </div>
            <div className="content">
              <h2>Contact Me</h2>
              <p>
                We are testing the images on my personal website to see how the
                cards are going to be.
              </p>
              <div className="btn">
                <Button
                  variant="outlined"
                  color="secondary"
                  component={Contact}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>

          {/* CARD THREE */}
          <div className="card">
            <div className="imgBx">
              <img src="images/career.jpg" />
            </div>
            <div className="content">
              <h2>Career</h2>
              <p>
                We are testing the images on my personal website to see how the
                cards are going to be.
              </p>
              <div className="btn">
                <Button variant="outlined" color="secondary" component={Career}>
                  My Carrer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCards;
