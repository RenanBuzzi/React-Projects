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
      <div className="waveHome">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="0.7"
            d="M0,192L30,165.3C60,139,120,85,180,101.3C240,117,300,203,360,208C420,213,480,139,540,138.7C600,139,660,213,720,245.3C780,277,840,267,900,224C960,181,1020,107,1080,85.3C1140,64,1200,96,1260,101.3C1320,107,1380,85,1410,74.7L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
        <div className="homePhrase">Welcome to my Page!</div>
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
