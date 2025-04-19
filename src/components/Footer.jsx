import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../css/Footer.css";
import logo from "../images/logo.jpg";

const Footer = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };
  return (
    <footer className="footer">
        <img
          src={logo}
          alt="logo"
          style={{ width: 70 }}
          onClick={handleClick}
        />

      <div className="footer-content">
        <p>&copy; 2025 Movie App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
