import React from 'react';
import Content from '../Content.js';
import Portfolio from "./Portfolio";
import {firstObj, secObj, thirdObj} from './Data'
import '../styles.css'
import Hero from "../Hero";
function HomePage() {
    return (
        <>
            <Hero/>
            <Content {...firstObj} />
            <Portfolio/>
            <Content {...secObj} />
            {/*something else here*/}
            <Content {...thirdObj} />
            <footer/>
        </>
    )
}
export default HomePage;