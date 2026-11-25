import avatarImg from "../assets/portrait-professionnel-detoure.png";

const approach = [
  {
    title: "Comprendre le besoin",
    description:
      "Clarifier l’objectif et organiser le contenu avant de passer à l’interface.",
  },
  {
    title: "Concevoir pour tous les écrans",
    description:
      "Penser les usages mobile, tablette et ordinateur dès la conception.",
  },
  {
    title: "Soigner l’expérience",
    description:
      "Porter attention à la lisibilité, à l’accessibilité et aux interactions.",
  },
];

function About() {
  return (
    <>
      <section id="About" className="about-container" aria-labelledby="hero-title">
        <div className="about-hero">
          <div className="hero-portrait-stage">
            <p className="hero-status">
              <span aria-hidden="true" />
              Création web · Burkina Faso
            </p>
            <h1 id="hero-title" className="hero-nameplate">
              <span>BAGNAN</span> <strong>LEMUEL</strong>
            </h1>
            <div className="about-img">
              <img
                src={avatarImg}
                alt="Portrait de Bagnan Lemuel, développeur frontend"
                width="960"
                height="1200"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
          <div className="about-text">
            <p className="about-eyebrow">Frontend · Burkina Faso</p>
            <h2>
              Des idées prennent vie, <span className="highlight">pixel après pixel.</span>
            </h2>
            <p className="about-role">Bonjour, moi c’est Bagnan Lemuel.</p>
            <p>
              Je transforme des idées et des maquettes en interfaces soignées,
              adaptées à tous les écrans et simples à utiliser.
            </p>
            <div className="about-actions">
              <a className="button-link button-link--primary" href="#Projects">
                Voir mes projets <span aria-hidden="true">↗</span>
              </a>
              <a className="button-link button-link--secondary" href="#Contact">
                Me contacter
              </a>
            </div>
            <ul className="hero-meta" aria-label="Profil">
              <li><span aria-hidden="true">●</span> Burkina Faso</li>
              <li>React · JavaScript</li>
              <li>Responsive</li>
            </ul>
          </div>
        </div>
        <span className="hero-index" aria-hidden="true">Portfolio · 2026</span>
      </section>

      <section
        id="Approach"
        className="approach-section"
        aria-labelledby="approach-title"
      >
        <div className="approach-intro">
          <p className="section-kicker">À propos de moi</p>
          <h2 id="approach-title">Je donne forme aux idées, jusque dans les détails.</h2>
          <p>
            Basé au Burkina Faso, je développe des interfaces frontend avec
            React et JavaScript. J’aime transformer une idée ou une maquette
            en expérience web claire, responsive et simple à utiliser.
          </p>
          <p>
            Mon objectif : créer des interfaces utiles, où le design et le code
            servent le même parcours.
          </p>
          <a className="about-more-link" href="#Projects">
            Voir comment je travaille <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="approach-details">
          <p className="approach-details-label">Ma manière d’aborder un projet</p>
          <ol className="approach-list">
            {approach.map((item, index) => (
              <li className="approach-item" key={item.title}>
                <span className="approach-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="approach-item-mark" aria-hidden="true">↗</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

export default About;
