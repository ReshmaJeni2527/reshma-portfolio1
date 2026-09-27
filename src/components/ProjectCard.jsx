import "./ProjectCard.css";

export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="project-card__thumb" aria-hidden="true">
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>

      <div className="project-card__body">
        <h3>{project.name}</h3>
        <p className="project-card__desc">{project.description}</p>

        {project.features?.length > 0 && (
          <ul className="project-card__features">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        )}

        {project.impact && <p className="project-card__impact">{project.impact}</p>}

        <div className="project-card__tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        {(project.liveUrl || project.githubUrl) && (
          <div className="project-card__links">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live Demo ↗
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
