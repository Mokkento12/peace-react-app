import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleItemClick = (path) => {
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
              location.pathname === "/" ? "active" : ""
            }`}
            onClick={() => handleItemClick("/")}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`header-list-item ${
              location.pathname === "/client-registration" ? "active" : ""
            }`}
            onClick={() => handleItemClick("/client-registration")}
          >
            <Link to="/client-registration">Client Registration</Link>
          </li>
          <li
            className={`header-list-item ${
              location.hash === "#advisors" ? "active" : ""
            }`}
            onClick={() => handleItemClick("#advisors")}
          >
            <a href="#advisors">Advisors</a>
          </li>
          <li
            className={`header-list-item ${
              location.hash === "#register-advisor" ? "active" : ""
            }`}
            onClick={() => handleItemClick("#register-advisor")}
          >
            <a href="#register-advisor">Register as an Advisor</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
