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
          <h2 id="contact-title">Une idée en tête ?</h2>
          <p>
            Décrivez-moi votre idée, même si elle n’est pas encore tout à fait
            définie. Je vous répondrai avec plaisir.
          </p>
        </div>
        <Formulaire />
      </section>
      <div className="footer-bottom">
        <nav className="footer-links" aria-label="Réseaux et contact">
          <a
            href="https://wa.me/22673308997"
            target="_blank"
            rel="noreferrer"
            aria-label="Contacter Lemuel sur WhatsApp"
          >
            <img src={whatsapp} alt="" />
          </a>
          <a
            href="mailto:bagnandeljes@gmail.com"
            aria-label="Envoyer un e-mail à Lemuel"
          >
            <img src={gmail} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/lemuel-bagnan-b89828409"
            target="_blank"
            rel="noreferrer"
            aria-label="Profil LinkedIn de Lemuel"
          >
            <img src={linkedin} alt="" />
          </a>
          <a
            href="https://github.com/lemuelbagnan40-lab"
            target="_blank"
            rel="noreferrer"
            aria-label="Profil GitHub de Lemuel"
          >
            <img className="social-icon--github" src={github} alt="" />
          </a>
        </nav>
        <p className="footer-copy">
          © {year} Bagnan Lemuel. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
