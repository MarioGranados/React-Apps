import './Curtains.css'
import React, {useState} from "react";

function Curtains() {
    const [scroll, setScroll] = useState(false);
    const curtainEffect = () => {
        if(window.scrollY >= 400) {
            window.removeEventListener('scroll', curtainEffect);
            setScroll(true)
        } else {
            setScroll(false);
        }
    }
    window.addEventListener('scroll', curtainEffect)
    return (
        <>
            <div className={scroll ? 'curtain_left bg-dark' : ''}>
            </div>
            <div className={scroll ? 'curtain_right bg-dark' : ''}>
            </div>
        </>
    )
}
export default Curtains