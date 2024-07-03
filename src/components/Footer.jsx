import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="FooterComponent">
      <h1>Footer</h1>
      <p>Footer Component</p>
      <Link to={`/nouscontacter`}>
        <p>Nous Contacter</p>
      </Link>
      <Link to={`/politiqueconf`}>
        <p>Politique de Confidentialité</p>
      </Link>
    </section>
  );
}

export default Footer;
