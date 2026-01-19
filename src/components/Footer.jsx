import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3>My Blog App</h3>

      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>

        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>

        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>

        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        
      </div>

      <p>© 2026 My Blog App | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
