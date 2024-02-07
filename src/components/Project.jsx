function Project({ image, title, description, tech, isReverse }) {
  return (
    <div className={`project ${isReverse ? "reverse" : ""}`}>
      <div className="project-img">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h4>{title}</h4>
        <p>{description}</p>
        <li>{tech}</li>
        <button>View Code</button>
      </div>
    </div>
  );
}

export default Project;
