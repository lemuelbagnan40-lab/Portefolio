import "../styles/Footer.css";
import { useState } from "react";

import whatsapp from "../assets/whatsapp.svg";
import gmail from "../assets/new.svg";
import linkd from "../assets/linkedin.svg";
import git from "../assets/logo.svg";

function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent("Projet portfolio");
    const body = encodeURIComponent(`Mon e-mail : ${email}\n\n${message}`);
    window.location.href = `mailto:bagnandeljes@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="Contact">
      <h2 className="footer-invitation">On en parle ?</h2>
      <p className="footer-intro">Décrivez-moi votre idée, même si elle n’est pas encore tout à fait définie. Je vous répondrai avec plaisir.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="contact-email">Votre e-mail</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="vous@exemple.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label htmlFor="contact-message">Votre message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Qu’aimeriez-vous créer ?"
          rows="5"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
        <button type="submit">Envoyer mon message <span aria-hidden="true">→</span></button>
      </form>
      <div className="footer-links">
        <a href="https://wa.me/22673308997" target="_blank" rel="noreferrer" aria-label="Contacter Lemuel sur WhatsApp">
          <img src={whatsapp} alt="" />
        </a>
        <a href="mailto:bagnandeljes@gmail.com" aria-label="Envoyer un e-mail à Lemuel">
          <img src={gmail} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/lemuel-bagnan-b89828409" target="_blank" rel="noreferrer" aria-label="Profil LinkedIn de Lemuel">
          <img src={linkd} alt="" />
        </a>
        <a href="https://github.com/lemuelbagnan40-lab" target="_blank" rel="noreferrer" aria-label="Profil GitHub de Lemuel">
          <img src={git} alt="" />
        </a>
      </div>
      <p className="footer-copy">&copy; {year} Bagnan Lemuel. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
