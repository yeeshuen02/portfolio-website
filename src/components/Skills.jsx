import "../styles/Skills.css";
import Skill from "./Skill.jsx";
import { LANGUAGES, TECHNOLOGIES } from "../data";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h1>Technical Skills</h1>
      <h3>LANGUAGES</h3>

      <div className="skills-container">
        {LANGUAGES.map((languages) => (
          <Skill key={languages.title} {...languages} />
        ))}
      </div>

      <h3>TECHNOLOGIES & FRAMEWORKS</h3>

      <div className="skills-container">
        {TECHNOLOGIES.map((technologies) => (
          <Skill key={technologies.title} {...technologies} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
