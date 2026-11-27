import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="Projects"
      className="projects-section"
      aria-labelledby="projects-title"
    >
      <div className="section-heading reveal-on-scroll">
        <p className="section-kicker">Sélection de projets</p>
        <h2 id="projects-title">Des réalisations concrètes, du besoin à la mise en ligne.</h2>
        <p className="section-intro">
          Chaque réalisation vise le même objectif : une interface claire,
          accessible et fidèle au besoin initial.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => {
          const projectHost = project.liveUrl
            ? new URL(project.liveUrl).hostname.replace(/^www\./, "")
            : "projet-web";

          return (
            <article className="project-card reveal-on-scroll" key={project.name}>
              <div className="project-visual">
                <div className="project-window">
                  <div className="project-window-bar" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span className="project-window-address">{projectHost}</span>
                  </div>
                  <div className="project-window-content">
                    <span className="project-visual-label">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {projects.length > 1
                        ? `Projet ${index + 1} sur ${projects.length}`
                        : "Projet présenté"}
                    </span>
                    {project.logoUrl ? (
                      <img
                        className="project-logo"
                        src={project.logoUrl}
                        alt={`Logo de ${project.name}`}
                        width="220"
                        height="220"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span className="project-logo" aria-hidden="true">
                        {project.name}
                      </span>
                    )}
                    <span className="project-visual-caption">{project.type}</span>
                  </div>
                </div>
              </div>

              <div className="project-details">
                <p className="project-type">{project.type || "Projet web"}</p>
                <h3>{project.name}</h3>
                <p className="project-role">{project.role || "Développement frontend"}</p>
                {project.context && (
                  <p className="project-context">
                    <strong>Contexte</strong>
                    {project.context}
                  </p>
                )}
                <p className="project-description">{project.description}</p>

                {project.highlights && project.highlights.length > 0 && (
                  <ul className="project-highlights">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}

                <ul className="project-technologies" aria-label="Technologies utilisées">
                  {(project.technologies || []).map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>

                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Voir le projet <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
