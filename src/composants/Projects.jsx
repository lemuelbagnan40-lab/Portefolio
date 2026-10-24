import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="Projects"
      className="projects-section"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Sélection de projets</p>
        <h2 id="projects-title">Des idées concrétisées sur le web.</h2>
        <p className="section-intro">
          Quelques réalisations qui montrent ce que j’aime construire.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="project-visual">
              <span className="project-visual-label">
                Plateforme d’apprentissage
              </span>
              <img
                className="project-logo"
                src={project.logoUrl}
                alt={`Logo de ${project.name}`}
                width="220"
                height="220"
                loading="lazy"
                decoding="async"
              />
              <span className="project-visual-caption">
                HTML <span aria-hidden="true">·</span> CSS{" "}
                <span aria-hidden="true">·</span> JavaScript
              </span>
            </div>

            <div className="project-details">
              <p className="project-type">Projet web</p>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <ul
                className="project-technologies"
                aria-label="Technologies utilisées"
              >
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <div className="project-links">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Visiter le site <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
