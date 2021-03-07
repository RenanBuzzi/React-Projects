import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { render } from '@testing-library/react';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);  
    

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth < 960 || window.innerWidth > 960) {
      setButton(false);
      
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <i class="fa fa-code" aria-hidden="true"></i>&nbsp;Renan Buzzi&nbsp; <i class="fa fa-code" aria-hidden="true"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}>
                About me
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/experiences'
                className='nav-links'
                onClick={closeMobileMenu}>
                Job Experiences
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            <div>                                
             {/* <a href="https://www.facebook.com/renan.buzzi" class="fa fa-facebook" onLoad={handleShow == true} class="visible"></a> */}
            {/* {handleShow === true && <a href="https://www.linkedin.com/in/renangasparbuzzi" class="fab fa-linkedin" hidden="{handleShow}"></a>}
            {handleShow === true && <a href="https://www.facebook.com/renan.buzzi" class="fa fa-facebook"></a>} */}
            </div>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}
export default Navbar;