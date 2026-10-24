import { useState } from "react";

function Formulaire() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent("Projet portfolio");
    const body = encodeURIComponent(`Mon e-mail : ${email}\n\n${message}`);
    window.location.href = `mailto:bagnandeljes@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      aria-describedby="contact-form-note"
    >
      <label htmlFor="contact-email">Votre e-mail</label>
      <input
        id="contact-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="bagnandeljes@gmail.com"
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
        maxLength={2000}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
      />
      <button type="submit">
        Préparer mon e-mail <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note" id="contact-form-note">
        Votre application e-mail s’ouvrira avec le message prérempli.
      </p>
    </form>
  );
}

export default Formulaire;
