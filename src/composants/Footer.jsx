import { useEffect, useRef, useState } from "react";
import whatsapp from "../assets/whatsapp.svg";
import gmail from "../assets/new.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/logo.svg";
import Formulaire from "./Formulaire";

const emailAddress = "bagnandeljes@gmail.com";

function Footer() {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef(null);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(emailAddress);
    } catch {
      const field = document.createElement("textarea");
      field.value = emailAddress;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }

    setCopied(true);
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopied(false), 2200);
  }

  return (
    <footer className="site-footer">
      <section
        id="Contact"
        className="contact-section"
        aria-labelledby="contact-title"
      >
        <div className="contact-copy reveal-on-scroll">
          <p className="section-kicker">Contact</p>
          <h2 id="contact-title">Échangeons sur votre projet.</h2>
          <p>
            Vous avez un projet, une opportunité ou une question ? Décrivez votre
            besoin et je vous réponds dans les plus brefs délais.
          </p>
          <div className="contact-options">
            <a className="contact-email" href={`mailto:${emailAddress}`}>
              <span className="contact-option-label">E-mail</span>
              <span>
                {emailAddress} <span aria-hidden="true">↗</span>
              </span>
            </a>
            <a
              className="contact-whatsapp"
              href="https://wa.me/22673308997"
              target="_blank"
              rel="noopener noreferrer"
            >
              Écrire sur WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <button
              className="copy-email"
              type="button"
              onClick={copyEmail}
              data-copied={copied}
            >
              <span aria-hidden="true">{copied ? "✓" : "⧉"}</span>
              <span aria-live="polite">{copied ? "Adresse copiée" : "Copier l’e-mail"}</span>
            </button>
          </div>
        </div>
        <Formulaire className="reveal-on-scroll" />
      </section>
      <div className="footer-bottom">
        <div className="footer-main">
          <a className="footer-brand" href="#Home">
            <span className="footer-brand-name">Lemuel<span>.</span></span>
            <small>Développeur frontend · Burkina Faso</small>
            <span className="sr-only"> — retour à l’accueil</span>
          </a>
          <nav className="footer-links" aria-label="Réseaux et contact">
            <a href="https://wa.me/22673308997" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="" />
              <span>WhatsApp</span>
            </a>
            <a href={`mailto:${emailAddress}`}>
              <img src={gmail} alt="" />
              <span>E-mail</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lemuel-bagnan-b89828409"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/lemuelbagnan40-lab"
              target="_blank"
              rel="noopener noreferrer"
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
          <span>Accessible et adaptatif</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
