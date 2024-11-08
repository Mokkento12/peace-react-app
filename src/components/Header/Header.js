import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="img/logo.png" alt="Logo" className="logo-img" />
      </a>
      <nav className="nav-menu">
        <ul className="header-menu">
          <li className="header-list-item active">
            <a href="#home">Home</a>
          </li>
          <li className="header-list-item">
            <a href="#client-registration">Client Registration</a>
          </li>
          <li className="header-list-item">
            <a href="#advisors">Advisors</a>
          </li>
          <li className="header-list-item">
            <a href="#register-advisor">Register as an Advisor</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
