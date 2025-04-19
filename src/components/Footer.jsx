import "../css/Footer.css";
import logo from "../images/logo.jpg";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <footer className="footer">
        <img
          src={logo}
          alt="logo"
          style={{ width: 70 }}
          onClick={scrollToTop}
        />

      <div className="footer-content">
        <p>&copy; 2025 Movie App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
