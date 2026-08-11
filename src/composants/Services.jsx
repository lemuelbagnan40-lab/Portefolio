import "../styles/Services.css";

function Services() {
  return (
    <>
      <section className="services-container">
        <h2>MES SERVICES</h2>
        <div className="services-card">
          <div className="card">
            <h3>SITE-VITRINE</h3>
            <p>
              Creation de sites web professionnels et modernes pour presenter
              votre activite, votre marque ou votre entreprise.
            </p>
          </div>
          <div className="card">
            <h3>INTEGRATION WEB</h3>
            <p>
              Transformation de vos maquettes (Figma, PSD, croquis) em pages web
              propres, structurees et fideles au design.
            </p>
          </div>
          <div className="card">
            <h3>RESPONSIVE DESIGN</h3>
            <p>
              Adaptation de votre site pour qu'il s'affiche parfaitement et de
              maniere fluide pour tous les ecrans (mobiles, tablettes, pc).
            </p>
          </div>
          <div className="card">
            <h3>REFONTE & CORRECTION</h3>
            <p>
              Amelioration des sites existants, correction de bugsd'affichage ou
              mise a jours du design pour meilleur rendu.
            </p>
          </div>
          <div className="card">
            <h3>INFOGRAPHIE</h3>
            <p>
              Conception de visuels attractifs, affiches, flyers, logo et
              supports de communication percutants pour vos projets.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
