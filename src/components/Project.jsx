function Project({ image, title, description, tech, link, isReverse }) {
  return (
    <div className={`project ${isReverse ? "reverse" : ""}`}>
      <div className="project-img">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h4>{title}</h4>
        <p>{description}</p>
        <li>{tech}</li>
        <a href={link} target="_blank">
          <button>View Code</button>
        </a>
      </div>
    </div>
  );
}

export default Project;
