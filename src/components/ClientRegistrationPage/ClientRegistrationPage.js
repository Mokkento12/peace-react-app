import React, { useState, useEffect } from "react";
import Header from "../Header/Header"; // Импортируем Header
import Footer from "../Footer/Footer"; // Импортируем Footer
import "./ClientRegistrationPage.css";

const ClientRegistrationPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Отключаем скролл страницы при открытии модального окна
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div>
      <Header /> {/* Добавляем шапку */}
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
      <Footer /> {/* Добавляем футер */}
    </div>
  );
};

export default ClientRegistrationPage;
