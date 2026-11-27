import { useEffect, useRef, useState } from "react";
import DownloadCvButton from "./DownloadCvButton";
import ThemeToggle from "./ThemeToggle";

const navigationLinks = [
  { label: "Accueil", href: "#Home" },
  { label: "À propos", href: "#Approach" },
  { label: "Projets", href: "#Projects" },
  { label: "Services", href: "#Services" },
  { label: "Compétences", href: "#Skills" },
  { label: "Contact", href: "#Contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const headerRef = useRef(null);
  const navigationRef = useRef(null);
  const toggleButton = useRef(null);

  useEffect(() => {
    const sectionIds = ["About", "Approach", "Projects", "Services", "Skills", "Contact"];

    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section) => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);

        if (visibleSections.length > 0) {
          visibleSections.sort(
            (firstSection, secondSection) =>
              firstSection.boundingClientRect.top - secondSection.boundingClientRect.top,
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

  useEffect(() => {
    let frame = 0;

    function updateProgress() {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      document.documentElement.style.setProperty("--scroll-progress", ratio.toFixed(4));
    }

    function scheduleProgress() {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    }

    updateProgress();
    window.addEventListener("scroll", scheduleProgress, { passive: true });
    window.addEventListener("resize", scheduleProgress);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleProgress);
      window.removeEventListener("resize", scheduleProgress);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    navigationRef.current?.querySelector(".nav-link")?.focus();

    function handlePointerDown(event) {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false);
    }

    function handleTrapKey(event) {
      if (event.key !== "Tab" || !navigationRef.current) return;

      const focusables = [
        toggleButton.current,
        ...navigationRef.current.querySelectorAll("a[href], button:not([disabled])"),
      ].filter(Boolean);
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleTrapKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleTrapKey);
    };
  }, [menuOpen]);

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
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span />
      </div>
      <header className="site-header" ref={headerRef} onKeyDown={handleKeyDown}>
        <a
          className="logo"
          href="#Home"
          onClick={closeMenu}
          aria-label="Lemuel. Développeur frontend — accueil"
        >
          <span className="logo-name">Lemuel<span>.</span></span>
          <span className="logo-caption">Développeur frontend</span>
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
          ref={navigationRef}
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
          <ThemeToggle />
        </nav>
      </header>
    </>
  );
}

export default Header;
