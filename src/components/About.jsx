import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about" id="about">
      <h1>About Me</h1>
      <p>
        As a final-year computer science student with an passion for continuous
        learning and a curiosity that extends beyond technology, I am knowledge
        in UI/UX design, front-end web development with React and machine
        learning with Python and R. My academic journey has instilled in me
        strong problem-solving skills and a keen ability to adapt. Exposed
        myself to diverse working experiences and actively participated in
        extracurricular activities while taking leadership roles throughout this
        journey.
      </p>
      <div className="roles-container">
        <div className="roles">UI/UX Designer</div>
        <div className="roles">Front-end Developer</div>
        <div className="roles">Machine Learning</div>
      </div>
    </section>
  );
}

export default About;
