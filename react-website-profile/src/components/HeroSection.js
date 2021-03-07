import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src="/videos/Coding.mp4" autoPlay loop muted></video>
            <h1>Renan Buzzi</h1>
            <p>Software Engineer...</p>
            <div className="hero-btns">
                <Button className="btns" 
                        buttonStyle="btn--outline"
                        buttonSize="btn--large">
                GET STARTED</Button>
                {/* <Button className="btns" 
                        buttonStyle="btn--primary"
                        buttonSize="btn--large">
                CONTACT ME <i className="fa fa-arrow-right"></i>
                </Button> */}
            </div>
        </div>
    );
};

export default HeroSection;