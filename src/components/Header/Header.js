import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);

    if (itemName === "client-registration") {
      setIsModalOpen(true);
      document.body.classList.add("no-scroll");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("no-scroll");
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

      {/* Модальное окно */}

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
            <h2>Client Registration</h2>
            <form className="registration-form">
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
