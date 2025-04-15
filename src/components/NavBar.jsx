import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../images/logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <GiHamburgerMenu size={40} color="white" />
      </div>
    </nav>
  );
}

export default NavBar;
