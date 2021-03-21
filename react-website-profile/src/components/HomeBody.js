import React from 'react';
import './HomeBody.css';
import { Button } from './Button';


function HomeBody() {
  return (    
    <>
  <div class="curved">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F3F4F5" fill-opacity="0.1" d="M0,288L60,240C120,192,240,96,360,90.7C480,85,600,171,720,181.3C840,192,960,128,1080,128C1200,128,1320,192,1380,224L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    <h1>Welcome to my personal profile!</h1>  
      <div className="LeftContainer">
          <div className="phrase">This div element has position: absolute and left: auto.
          </div>
            <div className="home-btns">
                          <Button className="btns" 
                                  buttonStyle="btn--outline"
                                  buttonSize="btn--large">
                          ABOUT ME</Button>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="0.1" d="M0,32L60,42.7C120,53,240,75,360,117.3C480,160,600,224,720,234.7C840,245,960,203,1080,197.3C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
      </div>
      <div className="RightContainer">
          <div className="phrase">This div element has position: absolute and left: auto.
          </div>
            <div className="home-btns">
                          <Button className="btns" 
                                  buttonStyle="btn--outline"
                                  buttonSize="btn--large">
                          ABOUT ME</Button>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="0.1" d="M0,256L60,256C120,256,240,256,360,250.7C480,245,600,235,720,197.3C840,160,960,96,1080,69.3C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
      </div>
      <div id="container">
        <div>
        <Button className="btns" 
                                  buttonStyle="btn--outline"
                                  buttonSize="btn--large">
                          ABOUT ME</Button>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="0.1" d="M0,256L60,256C120,256,240,256,360,250.7C480,245,600,235,720,197.3C840,160,960,96,1080,69.3C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                          
        </div>
        <div>
        <Button className="btns" 
                                  buttonStyle="btn--outline"
                                  buttonSize="btn--large">
                          ABOUT ME</Button>
        </div>
      </div>
  </div>
  </>
  );
}

export default HomeBody;