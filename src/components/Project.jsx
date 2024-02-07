function Project(props) {
  return (
    <div className="project">
      <div className="project-img">
        <img src={props.image} alt="" />
      </div>
      <div className="project-content">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <li>{props.tech}</li>
        <button>View Code</button>
      </div>
    </div>
  );
}

export default Project;
