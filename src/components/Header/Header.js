import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="img/logo.png" alt="Logo" className="logo-img" />
      </a>
      <ul className="header-menu">
        <li className="header-list-item active">Home</li>
        <li className="header-list-item">Client Registration</li>
        <li className="header-list-item">Advisors</li>
        <li className="header-list-item">Register as an Advisor</li>
      </ul>
    </header>
  );
};

export default Header;
