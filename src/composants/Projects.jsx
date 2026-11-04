import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="Projects"
      className="projects-section"
      aria-labelledby="projects-title"
      style={{ padding: "clamp(5rem, 12vw, 10rem) 1.5rem" }}
    >
      <div className="section-heading reveal-on-scroll" style={{ width: "min(100%, var(--content-width))", margin: "0 auto 4rem" }}>
        <p className="section-kicker">Sélection de projets</p>
        <h2 id="projects-title">Des idées concrétisées sur le web.</h2>
        <p className="section-intro">
          Quelques réalisations qui montrent ce que j'aime construire.
        </p>
      </div>

      <div className="projects-list" style={{ width: "min(100%, var(--content-width))", margin: "0 auto", display: "grid", gap: "2.4rem" }}>
        {projects.map((project) => (
          <article className="project-card reveal-on-scroll" key={project.name} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", background: "linear-gradient(180deg, rgba(255,255,255,0.01) 0%, rgba(18,196,150,0.02) 100%)", border: "1px solid rgba(223, 235, 226, 0.1)", borderRadius: "20px", overflow: "hidden", boxShadow: "0 60px 120px -80px rgba(18, 196, 150, 0.4)", transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease" }}>
            <div className="project-visual" style={{ display: "grid", placeItems: "center", padding: "clamp(2.5rem, 6vw, 4rem)", background: "radial-gradient(circle, #f7fbf9 0%, #e8f3ef 100%)" }}>
              <img
                className="project-logo"
                src={project.logoUrl}
                alt={`Logo de ${project.name}`}
                width="220"
                height="220"
                loading="lazy"
                decoding="async"
                style={{ maxWidth: "200px", height: "auto", filter: "drop-shadow(0 40px 80px rgba(17, 83, 58, 0.16))" }}
              />
            </div>

            <div className="project-details" style={{ display: "flex", flexDirection: "column", padding: "clamp(2.2rem, 6vw, 4.2rem)", gap: "1rem" }}>
              <p className="project-type" style={{ color: "var(--accent)", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 700 }}>{project.role || project.type || "Projet web"}</p>
              <h3 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", margin: 0, letterSpacing: "-0.08em" }}>{project.name}</h3>
              <p className="project-description" style={{ color: "var(--text-muted)", lineHeight: 1.9, maxWidth: "56ch" }}>{project.description}</p>

              {project.highlights && project.highlights.length > 0 && (
                <ul className="project-highlights" style={{ display: "grid", gap: "0.8rem", padding: 0, listStyle: "none", margin: "0.8rem 0 0" }}>
                  {project.highlights.map((highlight) => (
                    <li key={highlight} style={{ position: "relative", paddingLeft: "1.2rem", color: "var(--text-muted)" }}>
                      <span style={{ position: "absolute", left: 0, top: "0.6rem", width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 0 6px rgba(18, 196, 150, 0.1)" }} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              <ul className="project-technologies" style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", padding: 0, listStyle: "none", margin: "1.4rem 0 0" }}>
                {(project.technologies || []).map((technology) => (
                  <li key={technology} style={{ padding: "0.4rem 0.9rem", background: "rgba(18, 196, 150, 0.12)", border: "1px solid rgba(18, 196, 150, 0.26)", borderRadius: "999px", fontSize: "0.84rem" }}>{technology}</li>
                ))}
              </ul>

              <div className="project-links" style={{ display: "flex", flexWrap: "wrap", gap: "1.4rem", marginTop: "2rem" }}>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", borderBottom: "1px solid rgba(18, 196, 150, 0.7)", color: "var(--text-strong)", fontWeight: 700 }}>
                    Démo live <span aria-hidden="true">↗</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", borderBottom: "1px solid rgba(18, 196, 150, 0.7)", color: "var(--text-strong)", fontWeight: 700 }}>
                    Code GitHub <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
