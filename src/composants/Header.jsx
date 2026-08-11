import "../styles/Header.css";

function Header() {
  return (
    <>
      {/*barre de navigation du portefolio*/}
      <header>
        <div className="logo">
          <h1>Lemuel.</h1>
        </div>
        <nav>
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#About" className="nav-link">
            About
          </a>
          <a href="#Skills" className="nav-link">
            Skills
          </a>
          <a href="#Services" className="nav-link">
            Services
          </a>
          <a href="#Contact" className="nav-link">
            Contact
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
