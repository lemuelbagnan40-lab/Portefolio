import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import jsIcon from "../assets/javascript.svg";
import reactIcon from "../assets/react.svg";

const skills = [
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "React", icon: reactIcon },
];

function Skills() {
  return (
    <section
      id="Skills"
      className="skills-section"
      aria-labelledby="skills-title"
    >
      <div className="section-heading">
        <p className="section-kicker">Mes outils</p>
        <h2 id="skills-title">Les technologies derrière mes interfaces.</h2>
        <p className="section-intro">
          Les outils que j’utilise pour donner vie à vos idées.
        </p>
      </div>

      <ul className="skills-grid">
        {skills.map((skill) => (
          <li className="skills-card" key={skill.name}>
            <span className="skill-icon-wrapper" aria-hidden="true">
              <img src={skill.icon} alt="" className="svg-logo" />
            </span>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
