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
            <h2>
              Salut, moi c’est <span className="highlight">Lemuel</span>
            </h2>
            <h3 className="typed-css">
              Je suis <span></span>
            </h3>
            <p>
              Je suis Bagnan Lemuel, développeur front-end passionné par le web
              et la création d’expériences simples, utiles et agréables à
              utiliser.
            </p>
            <p>
              Je conçois des sites modernes, accessibles et adaptés à tous les
              écrans, ainsi que des visuels pour mettre vos projets en valeur.
            </p>
            <a className="about-contact" href="#Contact">Parlons de votre projet <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
