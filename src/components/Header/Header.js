import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="img/logo.png" alt="Logo" className="logo-img" />
      </a>
      <nav className="nav-menu">
        <ul className="header-menu">
          <li
            className={`header-list-item ${
              activeItem === "home" ? "active" : ""
            }`}
            onClick={() => handleItemClick("home")}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className={`header-list-item ${
              activeItem === "client-registration" ? "active" : ""
            }`}
            onClick={() => handleItemClick("client-registration")}
          >
            <a href="#client-registration">Client Registration</a>
          </li>
          <li
            className={`header-list-item ${
              activeItem === "advisors" ? "active" : ""
            }`}
            onClick={() => handleItemClick("advisors")}
          >
            <a href="#advisors">Advisors</a>
          </li>
          <li
            className={`header-list-item ${
              activeItem === "register-advisor" ? "active" : ""
            }`}
            onClick={() => handleItemClick("register-advisor")}
          >
            <a href="#register-advisor">Register as an Advisor</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
