import { useState } from "react";

function Formulaire() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Prise de contact — ${name}`);
    const body = encodeURIComponent(
      `Bonjour Lemuel,\n\n${message}\n\n${name}\n${email}`,
    );
    window.location.href = `mailto:bagnandeljes@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      aria-describedby="contact-form-note"
    >
      <div className="contact-form-heading">
        <h3>Parlons de votre projet</h3>
        <p>Quelques détails suffisent pour commencer.</p>
      </div>
      <label htmlFor="contact-name">Votre nom</label>
      <input
        id="contact-name"
        name="name"
        type="text"
        autoComplete="name"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <label htmlFor="contact-email">Votre adresse e-mail</label>
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
        placeholder="Décrivez votre besoin, votre idée ou votre question…"
        rows="4"
        maxLength={2000}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
      />
      <button type="submit">
        Ouvrir mon application e-mail <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note" id="contact-form-note">
        Votre application de messagerie s’ouvrira avec votre message prérempli.
      </p>
    </form>
  );
}

export default Formulaire;
