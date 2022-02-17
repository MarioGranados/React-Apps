import {Link} from "react-router-dom";
import {useState} from "react";

const Navbar = () => {
    const [navbar, setNav] = useState(true);
    window.addEventListener("scroll", function () {
        window.scrollY > 150 ? setNav(false) : setNav(true);
    })
    return (
        <>
            <nav
                className={navbar ? "navbar sticky-top navbar-expand-lg navbar-light bg_btn" : "navbar sticky-top navbar-expand-lg navbar-light bg_secondary"}>
                <Link to="/"><a className={navbar ? "navbar-brand" : "navbar-brand text-light"}>Name Goes
                    Here..</a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <Link to="/Download"><a
                                className={navbar ? "nav-link" : "nav-link text-white"}>Products<span
                                className="sr-only">(current)</span></a></Link>
                        </li>
                        <li className="nav-item">
                            <a className={navbar ? "nav-link" : "nav-link text-white"} href="#">Download Sounds</a>
                        </li>
                        <li className="nav-item">
                            <a className={navbar ? "nav-link" : "nav-link text-white"} href="#">Community</a>
                        </li>
                    </ul>
                    <span className={navbar ? "nav-link" : "nav-link text-white"}>Shopping Cart</span>
                </div>
            </nav>
        </>
    )
}
export default Navbar;