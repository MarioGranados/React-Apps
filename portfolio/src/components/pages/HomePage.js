import React from 'react';
import Hero from '.././Hero.js';
import Portfolio from "./Portfolio";
import {firstObj, secObj, thirdObj} from './Data'
import MainSection from "./MainSection/MainSection";
function HomePage() {
    return (
        <>
            <MainSection />
            <Hero {...firstObj} />
            <Portfolio/>
            <Hero {...secObj} />
            {/*something else here*/}
            <Hero {...thirdObj} />
            <footer/>
        </>
    )
}
export default HomePage;