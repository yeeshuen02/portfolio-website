import React from "react";
import "../styles/Hero.css";
import linkedin from "../assets/hero/linkedin.png";
import github from "../assets/hero/github.png";
import profileImg from "../assets/hero/profile.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="greetings">
        <h2>Hello, I'm</h2>
        <h1>Yee Shuen :)</h1>

        <div className="links">
          <button>View Resume</button>
          <img src={linkedin} alt="link to linkedin" />
          <img src={github} alt="link to github" />
        </div>
      </div>

      <img src={profileImg} alt="profile picture" className="profile" />
    </section>
  );
}

export default Hero;
