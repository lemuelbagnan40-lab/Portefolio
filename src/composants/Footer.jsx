import whatsapp from "../assets/whatsapp.svg";
import gmail from "../assets/new.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/logo.svg";
import Formulaire from "./Formulaire";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <section
        id="Contact"
        className="contact-section"
        aria-labelledby="contact-title"
      >
        <div className="contact-copy">
          <p className="section-kicker">Contact</p>
          <h2 id="contact-title">Construisons quelque chose d’utile.</h2>
          <p>
            Vous avez un projet, une opportunité ou une question ? Présentez-moi
            votre besoin et échangeons sur la suite.
          </p>
          <div className="contact-options">
            <a className="contact-email" href="mailto:bagnandeljes@gmail.com">
              <span className="contact-option-label">E-mail</span>
              <span>
                bagnandeljes@gmail.com <span aria-hidden="true">↗</span>
              </span>
            </a>
            <a
              className="contact-whatsapp"
              href="https://wa.me/22673308997"
              target="_blank"
              rel="noreferrer"
            >
              Écrire sur WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <Formulaire />
      </section>
      <div className="footer-bottom">
        <div className="footer-main">
          <a className="footer-brand" href="#Home" aria-label="Lemuel, retour à l’accueil">
            <span className="footer-brand-name">Lemuel<span>.</span></span>
            <small>Développeur frontend · Burkina Faso</small>
          </a>
          <nav className="footer-links" aria-label="Réseaux et contact">
            <a href="https://wa.me/22673308997" target="_blank" rel="noreferrer">
              <img src={whatsapp} alt="" />
              <span>WhatsApp</span>
            </a>
            <a href="mailto:bagnandeljes@gmail.com">
              <img src={gmail} alt="" />
              <span>E-mail</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lemuel-bagnan-b89828409"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/lemuelbagnan40-lab"
              target="_blank"
              rel="noreferrer"
            >
              <img className="social-icon--github" src={github} alt="" />
              <span>GitHub</span>
            </a>
          </nav>
          <a className="back-to-top" href="#Home">
            Retour en haut <span aria-hidden="true">↑</span>
          </a>
        </div>
        <div className="footer-legal">
          <p className="footer-copy">© {year} Bagnan Lemuel</p>
          <span>Conçu avec soin</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
