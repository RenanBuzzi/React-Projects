import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Pages/Navbar.css";
import logoTalk2Be from "../images/bee.jpg";

function Navbar() {
  let history = useHistory();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const redirectHome = () => {
    history.push("/home");
  };

  const showButton = () => {
    if (window.innerWidth < 960 || window.innerWidth > 960) {
      setButton();
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div>
          <img
            className="navbar-logo"
            src={logoTalk2Be}
            alt="Logo"
            onClick={redirectHome}
          />
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <div className="logoMobileBee"></div>
            <li className="nav-item">
              <Link to="/Home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
