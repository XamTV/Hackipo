import "../styles/Home.css";

import CategorieComponent from "../components/CategorieComponent";
import logoWhite from "../assets/Default_white.png";
import About from "../components/About";

function Home() {
  return (
    <>
      <section className="HomeComponent">
        <img
          src={logoWhite}
          alt="logo en blanc Harmoni"
          className="logo-header"
        />
        <h1 className="title-header">
          Créez un environnement de travail inclusif
        </h1>
        <p className="para-header">
          Bienvenue sur notre plateforme dédiée à l&apos;inclusion et à la
          diversité en entreprise. Nous aidons les entreprises à adopter des
          pratiques inclusives et à promouvoir la diversité. Découvrez comment
          nos services peuvent transformer votre culture d&apos;entreprise.
        </p>
        <a href="#CategorieComponent">
          <button className="button-header">Découvrir nos conseils</button>
        </a>
      </section>
      <About />
      <CategorieComponent />
    </>
  );
}

export default Home;
