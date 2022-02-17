import {Link} from "react-router-dom";
const CatNavbar = () => {
    return (
        <>
            <nav className="navbar bg_dark text-white justify-content-center d-flex">
              <div className="navbar-text d-flex justify-content-around">

                  <Link to="/" className="text-decoration-none text_links mx-lg-5 mx-md-2">Plugins</Link>
                  <Link to="/" className="text-decoration-none text_links mx-lg-5 mx-md-2">Software</Link>
                  <Link to="/" className="text-decoration-none text_links mx-lg-5 mx-md-2">MIDI</Link>
              </div>
            </nav>
        </>
    )
}
export default CatNavbar;