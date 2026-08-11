import "../styles/Footer.css";

import whatsapp from "../assets/whatsapp.svg";
import gmail from "../assets/new.svg";
import linkd from "../assets/linkedin.svg";
import git from "../assets/logo.svg";

function Footer() {
  const time = () => {
    return new Date().getFullYear();
  };

  const name = () => {
    return "Bagnan Lemuel";
  };

  return (
    <footer>
      <div className="footer-links">
        <a href="https://wa.me/+22673308997" target="_blank">
          <img src={whatsapp} alt="" />
        </a>
        <a href="https://bagnandeljes@gmail.com" target="_blank">
          <img src={gmail} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/lemuel-bagnan-b89828409"
          target="_blank"
        >
          <img src={linkd} alt="" />
        </a>
        <a href="https://github.com/lemuelbagnan40-lab" target="_blank">
          <img src={git} alt="" />
        </a>
      </div>
      <p className="footer-copy">
        &copy; {time()}. {name()} Tous droits réservés.
      </p>
    </footer>
  );
}

export default Footer;
