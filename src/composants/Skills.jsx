import "../styles/Skills.css";

import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import jsIcon from "../assets/Javascript.svg";
import reactIcon from "../assets/react.svg";

function Skills() {
  return (
    <>
      <section id="Skills" className="skills-section">
        <h2>Mes compétences</h2>
        <p className="section-intro">Les outils que j’utilise pour donner vie à vos idées.</p>
        <div className="skills-grid">
          <div className="skills-card">
            <div className="skill-icon-wrapper">
              <img src={htmlIcon} alt="HTML5" className="svg-logo" />
            </div>
            <span>HTML5</span>
          </div>
          <div className="skills-card">
            <div className="skill-icon-wrapper">
              <img src={cssIcon} alt="CSS3" className="svg-logo" />
            </div>
            <span>CSS3</span>
          </div>
          <div className="skills-card">
            <div className="skill-icon-wrapper">
              <img src={jsIcon} alt="JAVASCRIPT" className="svg-logo" />
            </div>
            <span>JAVASCRIPT</span>
          </div>
          <div className="skills-card">
            <div className="skill-icon-wrapper">
              <img src={reactIcon} alt="REACT" className="svg-logo" />
            </div>
            <span>REACT</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
