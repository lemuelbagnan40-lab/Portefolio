const services = [
  {
    title: "Sites vitrines",
    description:
      "Des sites professionnels pour présenter votre activité, votre marque ou votre entreprise.",
  },
  {
    title: "Intégration web",
    description:
      "La transformation de vos maquettes en pages web soignées et fidèles au design.",
  },
  {
    title: "Design adaptatif",
    description:
      "Un affichage optimal sur mobile, tablette et ordinateur.",
  },
  {
    title: "Refonte et corrections",
    description:
      "L’amélioration de sites existants, la correction des problèmes d’affichage et la mise à jour du design.",
  },
  {
    title: "Identité visuelle",
    description:
      "Des visuels, affiches, flyers et logos pour communiquer clairement autour de vos projets.",
  },
];

function Services() {
  return (
    <section
      id="Services"
      className="services-container"
      aria-labelledby="services-title"
    >
      <div className="section-heading reveal-on-scroll">
        <p className="section-kicker">Mes services</p>
        <h2 id="services-title">Des prestations adaptées à votre projet web.</h2>
        <p className="section-intro">
          Un accompagnement clair, de l’idée à la mise en ligne.
        </p>
      </div>

      <div className="services-card">
        {services.map((service, index) => (
          <article
            className="card reveal-on-scroll"
            key={service.title}
            style={{ "--reveal-delay": `${(index % 3) * 80}ms` }}
          >
            <span className="card-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
