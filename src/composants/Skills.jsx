import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import jsIcon from "../assets/javascript.svg";
import reactIcon from "../assets/react.svg";
import tailwindIcon from "../assets/tailwind.jpeg";
import gitIcon from "../assets/git.jpeg";
import githubIcon from "../assets/logo.svg";

const skills = [
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "React", icon: reactIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Git", icon: gitIcon },
  { name: "GitHub", icon: githubIcon },
];

function Skills() {
  return (
    <section
      id="Skills"
      className="skills-section"
      aria-labelledby="skills-title"
    >
      <div className="section-heading reveal-on-scroll">
        <p className="section-kicker">Mes outils</p>
        <h2 id="skills-title">Les technologies derrière mes interfaces.</h2>
        <p className="section-intro">
          Les outils que j'utilise pour donner vie à vos idées.
        </p>
      </div>

      <div className="skills-marquee reveal-on-scroll" aria-label="Compétences en défilement">
        <div className="skills-marquee-track">
          {[...skills, ...skills].map((skill, index) => (
            <div className="skills-pill" key={`${skill.name}-${index}`}>
              <span className="skills-pill-icon" aria-hidden="true">
                <img src={skill.icon} alt="" className="skills-pill-img" />
              </span>
              <span className="skills-pill-label">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
