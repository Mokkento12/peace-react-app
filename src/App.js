import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Promo from "./components/Promo/Promo";
import Oracle from "./components/Oracle/Oracle";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Promo />
      <Oracle />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
