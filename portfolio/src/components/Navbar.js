import React from 'react';
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
                    <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="#">Resume</a>
                    <a className="nav-link" href="#">Portfolio</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;