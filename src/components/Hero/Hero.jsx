import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>Kadeeja Nafla CMT - MERN Stack Developer.</h1>
        <p>
          I'm a passionate MERN Stack Developer with a strong background in
          computer science, eager to build and innovate web applications.
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/react.png" alt="" />
          </div>
          <img src="./assets/images/naf.png" alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/html.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/css.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/js.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
