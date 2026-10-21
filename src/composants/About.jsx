import "../styles/About.css";
import avatarImg from "../assets/avatar.jpg";

function About() {
  return (
    <>
      <section id="About" className="about-container">
        <div className="about-hero">
          <div className="about-img">
            <img src={avatarImg} alt="Portrait de Bagnan Lemuel" />
          </div>
          <div className="about-text">
            <p className="about-eyebrow">Développeur front-end · Burkina Faso</p>
            <h2>
              Salut, moi c’est <span className="highlight">Lemuel</span>
            </h2>
            <h3 className="typed-css">
              Je suis <span></span>
            </h3>
            <p>
              J’aime donner vie aux idées en créant des sites web simples,
              utiles et agréables à utiliser. Je m’appelle Bagnan Lemuel, et je
              travaille surtout sur ce que vous voyez et utilisez à l’écran.
            </p>
            <p>
              Que vous partiez d’une idée ou d’une maquette, je peux vous aider
              à créer un site adapté à vos visiteurs et à tous les écrans.
            </p>
            <a className="about-contact" href="#Contact">Parlons de votre projet <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
