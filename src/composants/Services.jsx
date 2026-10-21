import "../styles/Services.css";

function Services() {
  return (
    <>
      <section id="Services" className="services-container">
        <h2>Mes services</h2>
        <div className="services-card">
          <div className="card">
            <h3>Sites vitrines</h3>
            <p>
              Création de sites professionnels pour présenter votre activité,
              votre marque ou votre entreprise.
            </p>
          </div>
          <div className="card">
            <h3>Intégration web</h3>
            <p>
              Transformation de vos maquettes en pages web soignées et fidèles
              au design.
            </p>
          </div>
          <div className="card">
            <h3>Design adaptatif</h3>
            <p>
              Un site agréable à consulter sur mobile, tablette et ordinateur.
            </p>
          </div>
          <div className="card">
            <h3>Refonte et corrections</h3>
            <p>
              Amélioration de sites existants, correction des problèmes
              d’affichage et mise à jour du design.
            </p>
          </div>
          <div className="card">
            <h3>Identité visuelle</h3>
            <p>
              Création de visuels, affiches, flyers et logos pour communiquer
              clairement autour de vos projets.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
