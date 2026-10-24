import avatarImg from "../assets/portrait.webp";

function About() {
  return (
    <section id="About" className="about-container" aria-labelledby="hero-title">
      <div className="about-hero">
        <div className="about-text">
          <p className="about-eyebrow">Développeur front-end · Burkina Faso</p>
          <h1 id="hero-title">
            Le web, pensé <span className="highlight">pour les gens.</span>
          </h1>
          <p className="about-role">Salut, moi c’est Lemuel.</p>
          <p>
            J’aime donner vie aux idées en créant des sites web simples, utiles
            et agréables à utiliser. Je m’appelle Bagnan Lemuel et je travaille
            surtout sur ce que vous voyez et utilisez à l’écran.
          </p>
          <p>
            Que vous partiez d’une idée ou d’une maquette, je peux vous aider à
            créer un site adapté à vos visiteurs et à tous les écrans.
          </p>
          <div className="about-actions">
            <a className="button-link button-link--primary" href="#Services">
              Découvrir mes services <span aria-hidden="true">↗</span>
            </a>
            <a className="button-link button-link--secondary" href="#Contact">
              Me contacter
            </a>
          </div>
        </div>
        <div className="about-img">
          <img
            src={avatarImg}
            alt="Portrait de Bagnan Lemuel"
            width="960"
            height="1280"
            fetchPriority="high"
          />
        </div>
      </div>
      <span className="hero-index" aria-hidden="true">Portfolio · 2026</span>
    </section>
  );
}

export default About;
