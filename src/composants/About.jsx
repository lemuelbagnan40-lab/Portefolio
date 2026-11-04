import avatarImg from "../assets/IMG-20261022-WA0036.jpg";

function About() {
  return (
    <section id="About" className="about-container" aria-labelledby="hero-title">
      <div className="about-hero">
        <div className="about-text">
          <p className="about-eyebrow">Développeur Frontend · Burkina Faso</p>
          <h1 id="hero-title">
            Je conçois des interfaces web <span className="highlight">claires, rapides et accessibles.</span>
          </h1>
          <p className="about-role">Salut, moi c'est Lemuel — Bagnan Lemuel.</p>
          <p>
            J'aide à transformer une idée ou une maquette en site web fonctionnel,
            optimisé pour tous les écrans et centré sur l'expérience utilisateur.
          </p>
          <div className="about-actions">
            <a className="button-link button-link--primary" href="#Projects">
              Voir mes projets <span aria-hidden="true">↗</span>
            </a>
            <a className="button-link button-link--secondary" href="#Contact">
              Me contacter
            </a>
          </div>
        </div>
        <div className="about-img">
          <img
            src={avatarImg}
            alt="Portrait de Bagnan Lemuel, développeur frontend"
            width="960"
            height="1280"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
      <span className="hero-index" aria-hidden="true">Portfolio · 2026</span>
    </section>
  );
}

export default About;
