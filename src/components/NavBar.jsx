import { Link } from "react-router-dom";
import "../css/Navbar.css"
import logo from "../images/logo.jpg";

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/"> <img src={logo} alt="logo" /> </Link>

        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>
}

export default NavBar