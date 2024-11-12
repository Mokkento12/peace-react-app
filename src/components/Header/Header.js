import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeItem, setActiveItem] = useState("home");
  const navigate = useNavigate();

  const handleItemClick = (itemName, path) => {
    setActiveItem(itemName);
    navigate(path);
  };

  return (
    <header className="header">
      <a href="#home" className="logo">
        <img src="img/logo.png" alt="Logo" className="logo-img" />
      </a>
      <nav className="nav-menu">
        <ul className="header-menu">
          <li
            className={`header-list-item ${
              activeItem === "home" ? "active" : ""
            }`}
            onClick={() => handleItemClick("home", "/")}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`header-list-item ${
              activeItem === "client-registration" ? "active" : ""
            }`}
            onClick={() =>
              handleItemClick("client-registration", "/client-registration")
            }
          >
            <Link to="/client-registration">Client Registration</Link>
          </li>
          <li
            className={`header-list-item ${
              activeItem === "advisors" ? "active" : ""
            }`}
            onClick={() => handleItemClick("advisors", "#advisors")}
          >
            <a href="#advisors">Advisors</a>
          </li>
          <li
            className={`header-list-item ${
              activeItem === "register-advisor" ? "active" : ""
            }`}
            onClick={() =>
              handleItemClick("register-advisor", "#register-advisor")
            }
          >
            <a href="#register-advisor">Register as an Advisor</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
