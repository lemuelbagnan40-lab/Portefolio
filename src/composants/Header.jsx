import { useEffect, useRef, useState } from "react";
import DownloadCvButton from "./DownloadCvButton";

const navigationLinks = [
  { label: "Accueil", href: "#Home" },
  { label: "Services", href: "#Services" },
  { label: "Compétences", href: "#Skills" },
  { label: "Contact", href: "#Contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const toggleButton = useRef(null);

  useEffect(() => {
    const sectionIds = ["About", "Services", "Skills", "Contact"];

    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section) => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);

        if (visibleSections.length > 0) {
          visibleSections.sort(
            (firstSection, secondSection) =>
              firstSection.boundingClientRect.top -
              secondSection.boundingClientRect.top,
          );

          const sectionId = visibleSections[0].target.id;
          const navigationSection = sectionId === "About" ? "Home" : sectionId;

          setActiveSection(navigationSection);
        }
      },
      { rootMargin: "-22% 0px -68% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Escape" && menuOpen) {
      closeMenu();
      toggleButton.current.focus();
    }
  }

  return (
    <header className="site-header" onKeyDown={handleKeyDown}>
      <a
        className="logo"
        href="#Home"
        onClick={closeMenu}
        aria-label="Lemuel, accueil"
      >
        Lemuel<span>.</span>
      </a>

      <button
        ref={toggleButton}
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="primary-navigation"
        className={menuOpen ? "primary-navigation is-open" : "primary-navigation"}
        aria-label="Navigation principale"
      >
        {navigationLinks.map((link) => {
          const sectionId = link.href.substring(1);

          return (
            <a
              className="nav-link"
              href={link.href}
              key={link.href}
              onClick={closeMenu}
              aria-current={activeSection === sectionId ? "location" : undefined}
            >
              {link.label}
            </a>
          );
        })}
        <DownloadCvButton onClick={closeMenu} />
      </nav>
    </header>
  );
}

export default Header;
