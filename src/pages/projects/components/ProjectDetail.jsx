export const ProjectDetail = ({ project }) => {
   
  return (
    <div className="project-detail-card">
      <h3>{project.title}</h3>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      <p>{project.technologies}</p>
    </div>
  );
};
