import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="FooterComponent">
      <img src="../src/assets/Default_white.png" alt="" />
      <Link to={`/nouscontacter`}>
        <p>Nous Contacter</p>
      </Link>
      <Link to={`/politiquedeconfidentialité`}>
        <p>Politique de Confidentialité</p>
      </Link>
    </div>
  );
}

export default Footer;
