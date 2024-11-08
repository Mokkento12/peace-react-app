import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Promo from "./components/Promo/Promo";
import Oracle from "./components/Oracle/Oracle";

function App() {
  return (
    <div className="App">
      <Hero />
      <Promo />
      <Oracle />
    </div>
  );
}

export default App;
