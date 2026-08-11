import "../styles/About.css";
import avatarImg from "../assets/avatar.jpg";

function About() {
  return (
    <>
      <section className="about-container">
        <div className="about-hero">
          <div className="about-img">
            <img src={avatarImg} alt="Lemuel picture" />
          </div>
          <div className="about-text">
            <h2>
              Salut, c'est <span className="highlight">LEMUEL</span>
            </h2>
            <h3 className="typed-css">
              Je suis <span></span>
            </h3>
            <p>
              Je suis BAGNAN LEMUEL developpeur web front-end passionne
              d'informatique et qui a envie de construire de belle chose.
            </p>
            <p>
              Je propose des services plus fiable, adapter a toute les
              plateformes avec des visuels attractif.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
