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
        <p className="section-kicker">Compétences techniques</p>
        <h2 id="skills-title">Les technologies que je maîtrise.</h2>
        <p className="section-intro">
          Les outils que j’utilise pour concevoir et développer vos interfaces.
        </p>
      </div>

      <div className="skills-marquee-caption" aria-hidden="true">
        <span>Stack technique</span>
        <span>{String(skills.length).padStart(2, "0")} technologies</span>
      </div>
      <div
        className="skills-marquee"
        role="region"
        aria-label="Compétences techniques en défilement"
      >
        <div className="skills-marquee-track">
          {[false, true].map((isDuplicate) => (
            <ul
              className="skills-marquee-set"
              key={isDuplicate ? "duplicate" : "skills"}
              aria-hidden={isDuplicate || undefined}
            >
              {skills.map((skill) => (
                <li className="skills-pill" key={skill.name}>
                  <span className="skills-pill-icon" aria-hidden="true">
                    <img src={skill.icon} alt="" className="skills-pill-img" />
                  </span>
                  <span className="skills-pill-label">{skill.name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
