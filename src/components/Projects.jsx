import "../styles/Projects.css";
import strokeImg from "../assets/projects/stroke.png";
import Project from "./Project.jsx";
import { PROJECTS } from "../data";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {/* <div className="project">
          <div className="project-img">
            <img src={strokeImg} alt="" />
          </div>
          <div className="project-content">
            <h4>Stroke Prediction</h4>
            <p>
              OneMind is a comprehensive website designed specifically for
              clinicians and psychiatrists. With its innovative features, the
              platform can process EEG data as input and utilise a sophisticated
              CNN+LSTM model to predict the likelihood of depression. This
              advanced functionality empowers clinicians with actionable
              insights derived from EEG analysis. Moreover, OneMind offers
              robust capabilities for securely storing and managing patient
              information, enabling seamless access to comprehensive reports.
              Developed collaboratively by a team of five members in an agile
              environment, this project reflects a commitment to delivering
              cutting-edge solutions for mental health practitioners.
            </p>
            <li>Python</li>
            <button>View Code</button>
          </div>
        </div> */}
        {/* <div className="project">
          <div className="project-content">
            <h4>Stroke Prediction</h4>
            <p>
              OneMind is a comprehensive website designed specifically for
              clinicians and psychiatrists. With its innovative features, the
              platform can process EEG data as input and utilise a sophisticated
              CNN+LSTM model to predict the likelihood of depression. This
              advanced functionality empowers clinicians with actionable
              insights derived from EEG analysis. Moreover, OneMind offers
              robust capabilities for securely storing and managing patient
              information, enabling seamless access to comprehensive reports.
              Developed collaboratively by a team of five members in an agile
              environment, this project reflects a commitment to delivering
              cutting-edge solutions for mental health practitioners.
            </p>
            <li>Python</li>
            <button>View Code</button>
          </div>
          <div className="project-img">
            <img src={strokeImg} alt="" />
          </div>
        </div> */}

        {PROJECTS.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
