import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleItemClick = (path) => {
    navigate(path);
  };

  return (
    <header className="header">
      <a href="#home" className="logo" onClick={() => handleItemClick("/")}>
        <img src="img/logo.png" alt="Logo" className="logo-img" />
      </a>
      <nav className="nav-menu">
        <ul className="header-menu">
          <li className="header-list-item">
            <Link to="/" onClick={() => handleItemClick("/")}>
              Home
            </Link>
          </li>
          <li className="header-list-item">
            <Link
              to="/client-registration"
              onClick={() => handleItemClick("/client-registration")}
            >
              Client Registration
            </Link>
          </li>
          <li className="header-list-item">
            <Link to="/advisors" onClick={() => handleItemClick("/advisors")}>
              Advisors
            </Link>
          </li>
          <li className="header-list-item">
            <a
              href="#register-advisor"
              onClick={() => handleItemClick("#register-advisor")}
            >
              Register as an Advisor
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
