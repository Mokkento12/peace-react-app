import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero/Hero";
import ClientRegistrationPage from "./components/ClientRegistrationPage/ClientRegistrationPage";
import AdvisorsPage from "./components/AdvisorsPage/AdvisorsPage";
import Promo from "./components/Promo/Promo";
import Oracle from "./components/Oracle/Oracle";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Promo />
                <Oracle />
                <Faq />
                <Footer />
              </>
            }
          />
          <Route
            path="/client-registration"
            element={<ClientRegistrationPage />}
          />
          <Route path="/advisors" element={<AdvisorsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
