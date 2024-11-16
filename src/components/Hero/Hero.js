import React from "react";
import Header from "../Header/Header";
import "./Hero.css";

const Hero = () => {
  return (
    <div class="hero">
      <Header />
      <div class="hero-container">
        <div class="hero-img-block">
          <img src="img/hero-img-block.png" alt="Find Youre Peace"></img>
        </div>
      </div>
    </div>
  );
};
export default Hero;
