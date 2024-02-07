import "../styles/Projects.css";
import strokeImg from "../assets/projects/stroke.png";
import Project from "./Project.jsx";
import { PROJECTS } from "../data";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {PROJECTS.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
