import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/"><a className="navbar-brand">Name Goes Here..</a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <Link to="/Download"><a className="nav-link">Products<span className="sr-only">(current)</span></a></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Download Sounds</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Community</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
      Shopping Cart
    </span>
                </div>
            </nav>
        </>
    )
}
export default Navbar;