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
      "Une expérience agréable à consulter sur mobile, tablette et ordinateur.",
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
      <div className="section-heading">
        <p className="section-kicker">Ce que je fais</p>
        <h2 id="services-title">De l’idée à une présence en ligne soignée.</h2>
        <p className="section-intro">
          Un coup de main, de l’idée jusqu’aux finitions.
        </p>
      </div>

      <div className="services-card">
        {services.map((service, index) => (
          <article className="card" key={service.title}>
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
