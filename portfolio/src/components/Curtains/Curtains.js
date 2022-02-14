import './Curtains.css'
import React, {useState} from "react";

function Curtains() {
    const [scroll, setScroll] = useState(false);
    const curtainEffect = () => {
        if (window.scrollY >= window.innerHeight) {
            window.removeEventListener('scroll', curtainEffect);
            setScroll(true)
        } else {
            setScroll(false);
        }
    }
    window.addEventListener('scroll', curtainEffect)
    return (
        <>
            {!scroll ?
                <div className='vh-100 bg-dark align-items-center d-flex justify-content-center'>
                    <div>
                        <div className="text-center green-text display-3">Hello! <br/>I'm Mario Granados</div>
                        <p className={'text-lead text-center green-text'}>Scroll Down</p>
                    </div>
                </div> : ''}
            <div className={scroll ? 'curtain_left active bg-dark' : ''}>
            </div>
            <div className={scroll ? 'curtain_right active bg-dark' : ''}>
            </div>
        </>
    )
}

export default Curtains