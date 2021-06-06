import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          All details about my page and some extra information.
        </p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Home</h2>
            <Link to="/sign-up">Home Page</Link>
          </div>
          <div class="footer-link-items">
            <h2>About</h2>
            <Link to="/sign-up">Abount</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact</h2>
            <Link to="/">Contact Me</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="https://www.linkedin.com/in/renangasparbuzzi">
              Linkedin
            </Link>
            <Link to="https://github.com/RenanBuzzi">GitHub</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <i class="fa fa-code" aria-hidden="true"></i>&nbsp;Renan
              Buzzi&nbsp; <i class="fa fa-code" aria-hidden="true"></i>
            </Link>
          </div>
          <small class="website-rights">Renan Buzzi © 2021</small>
          <div class="social-icons">
            <a
              class="social-icon-link"
              href="https://github.com/RenanBuzzi"
              target="_blank"
              aria-label="GitHub"
            >
              <i class="fa fa-github" />
            </a>
            <a
              class="social-icon-link"
              href="https://www.linkedin.com/in/renangasparbuzzi"
              target="_blank"
              aria-label="Linkedin"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
