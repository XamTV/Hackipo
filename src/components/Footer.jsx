import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <div className="FooterComponent">
        <div>
          <img src="../src/assets/Default_white.png" alt="logo du site" />
        </div>
        <div className="contactez-nous">
          <h3>Contactez-nous</h3>
          <p>Adresse</p>
          <p>31200 Toulouse</p>
          <p>+33 12 34 56 78 90</p>
          <p>Contact-nom@gmail.com</p>
        </div>
        <div className="link">
          <h3>Plus d&apos;information</h3>
          <Link to={`/categorie`}>
            <p>Catégorie</p>
          </Link>
          <Link to={`/`}>
            <p>FAQ</p>
          </Link>
          <Link to={`/`}>
            <p>Avis</p>
          </Link>
          <Link to={`/`}>
            <p>Bilan</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
