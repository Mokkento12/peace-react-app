import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./ClientRegistrationPage.css";

const ClientRegistrationPage = () => {
  return (
    <div className="client-registration-page">
      <div className="registration-section-container">
        <Header />
        <div className="form-container">
          <form className="registration-form">
            <h2 className="form-title">Client Registration</h2>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Register
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClientRegistrationPage;
