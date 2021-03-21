import React from 'react';
import '../../App.css'
// import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import HomeBody from '../HomeBody';

function Home (){
    return(
        <>
        <HeroSection/>
        <HomeBody/>
        <Footer />
        </>
    )
}

export default Home;