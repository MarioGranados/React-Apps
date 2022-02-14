import React from 'react';
import Content from '../Content.js';
import Portfolio from "./Portfolio";
import {firstObj, secObj, thirdObj} from './Data'
import '../styles.css'
import MainSection from "./MainSection/MainSection";
function HomePage() {
    return (
        <>
            <MainSection/>
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