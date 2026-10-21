import { useState } from "react";
import "../styles/Header.css";
import DownloadCvButton from "./DownloadCvButton";

const links = [
  ["Accueil", "#Home"],
  ["À propos", "#About"],
  ["Compétences", "#Skills"],
  ["Services", "#Services"],
  ["Contact", "#Contact"],
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="logo" href="#Home" onClick={closeMenu} aria-label="Lemuel, accueil">
        Lemuel<span>.</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="primary-navigation"
        className={`primary-navigation${menuOpen ? " is-open" : ""}`}
        aria-label="Navigation principale"
      >
        {links.map(([label, href]) => (
          <a className="nav-link" href={href} key={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <DownloadCvButton onClick={closeMenu} />
      </nav>
    </header>
  );
}

export default Header;
