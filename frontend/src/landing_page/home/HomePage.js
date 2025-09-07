import React from 'react';
// import Awards from './Awards';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';  //If file is outside the folder(../)

function HomePage() {
    return ( 
        <>
        <Hero/>
        <Stats/>
        <Pricing/>
        {/* <Awards/> */}
        <Education/>
        <OpenAccount/>
        </>
     );
}

export default HomePage;