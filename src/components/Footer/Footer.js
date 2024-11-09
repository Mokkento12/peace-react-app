import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
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
            Copyright © {new Date().getFullYear()} · Private Oracle ·
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

            <a href="#" className="footer-right-link">
              <img src="img/github.svg" alt="" className="footer-right-image" />
            </a>
            <a href="#" className="footer-right-link">
              <img
                src="img/pinterest.svg"
                alt=""
                className="footer-right-image"
              />
            </a>
          </div>
          <p className="footer-right-text">
            You must be of legal adult age as per your country’s requirements to
            use this service. Please note this service is for entertainment
            purposes only, you are responsible for all your life decisions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
