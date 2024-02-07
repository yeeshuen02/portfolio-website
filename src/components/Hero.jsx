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
          <a
            href="https://drive.google.com/file/d/1fdKfnoSZU96rwqscESBIGe92asbErc_a/view?usp=drive_link"
            target="_blank"
          >
            <button>View Resume</button>
          </a>
          <a href="https://www.linkedin.com/in/ang-yee-shuen/" target="_blank">
            <img src={linkedin} alt="link to linkedin" />
          </a>
          <a href="https://github.com/yeeshuen02" target="_blank">
            <img src={github} alt="link to github" />
          </a>
        </div>
      </div>

      <img src={profileImg} alt="profile picture" className="profile" />
    </section>
  );
}

export default Hero;
