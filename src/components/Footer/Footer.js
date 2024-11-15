import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Левая часть футера */}
        <div className="footer-left">
          <div className="logo-container">
            <img src="img/logo-footer.svg" alt="Logo" className="logo" />
            <div className="footer-desc">
              <h2 className="logo-footer-title">Private Oracle</h2>
              <a href="#" className="logo-footer-link">
                www.privateoracle.com
              </a>
            </div>
          </div>
          <span className="logo-footer-copyright">
            Copyright © {currentYear} · Private Oracle ·
          </span>

          <div className="footer-terms">
            <a href="#" className="footer-terms-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-terms-link">
              Terms and Conditions
            </a>
            <a href="#" className="footer-terms-link">
              Contact Us
            </a>
          </div>
        </div>

        {/* Правая часть футера */}
        <div className="footer-right">
          <h2 className="footer-right-title">Keep In Touch</h2>
          <div className="footer-right-links">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-right-link"
            >
              <img
                src="img/youtube.svg"
                alt="YouTube"
                className="footer-right-image"
              />
            </a>

            <a
              href="https://github.com/Mokkento12"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-right-link"
            >
              <img
                src="img/github.svg"
                alt="GitHub"
                className="footer-right-image"
              />
            </a>
            <a
              href="https://ru.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-right-link"
            >
              <img
                src="img/pinterest.svg"
                alt="Pinterest"
                className="footer-right-image"
              />
            </a>
          </div>
          <p className="footer-right-text">
            You must be of legal adult age as per your country’s requirements to
            use this service. Please note this service is for entertainment
            purposes only, and you are responsible for all your life decisions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
