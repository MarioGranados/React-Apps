import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light green_bg">
            <a className="navbar-brand" href="#">Mario Granados</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="nav-link active">Home <span className="sr-only">(current)</span></Link>
                    <Link to="/Resume" className="nav-link" href="#">Resume</Link>
                    <Link to='/Portfolio' className="nav-link" href="#">Portfolio</Link>
                    <Link to='/Footer' className='nav-link'>Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;