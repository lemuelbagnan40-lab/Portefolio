import avatarImg from "../assets/portrait-professionnel-detoure.webp";

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
    title: "Optimiser l’expérience utilisateur",
    description:
      "Garantir la lisibilité, l’accessibilité et la qualité des interactions.",
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
              Développement web · Burkina Faso
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
            <p className="about-eyebrow">Développeur frontend · Burkina Faso</p>
            <h2>
              Des interfaces web claires,{" "}
              <span className="highlight">fiables et accessibles.</span>
            </h2>
            <p className="about-role">Bonjour, je suis Bagnan Lemuel.</p>
            <p>
              J’intègre des maquettes et développe des interfaces React adaptées
              à tous les écrans, avec une attention particulière portée à
              l’accessibilité et à la performance.
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
              <li>Sites adaptatifs</li>
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
        <div className="approach-intro reveal-on-scroll">
          <p className="section-kicker">À propos de moi</p>
          <h2 id="approach-title">Une méthode claire, du besoin à la livraison.</h2>
          <p>
            Basé au Burkina Faso, je développe des interfaces avec React et
            JavaScript. Je transforme une idée ou une maquette en expérience
            web claire, adaptée à tous les écrans et simple à utiliser.
          </p>
          <p>
            Mon objectif : livrer des interfaces utiles, où le design et le
            code servent le même parcours utilisateur.
          </p>
          <a className="about-more-link" href="#Projects">
            Voir mes réalisations <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="approach-details">
          <p className="approach-details-label">Ma méthode de travail</p>
          <ol className="approach-list">
            {approach.map((item, index) => (
              <li
                className="approach-item reveal-on-scroll"
                key={item.title}
                style={{ "--reveal-delay": `${index * 90}ms` }}
              >
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
