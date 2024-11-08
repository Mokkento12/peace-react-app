import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Promo from "./components/Promo/Promo";
import Oracle from "./components/Oracle/Oracle";
import Faq from "./components/Faq/Faq";

function App() {
  return (
    <div className="App">
      <Hero />
      <Promo />
      <Oracle />
      <Faq />
    </div>
  );
}

export default App;
