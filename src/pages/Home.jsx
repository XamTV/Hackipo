import "../styles/Home.css";

import CategorieComponent from "../components/CategorieComponent";
import logoWhite from "../assets/Default_white.png";
import About from "../components/About";
import pictCat from "../assets/react.svg";
function Home() {
  return (
    <>
      <section className="HomeComponent">
        <div>
          <img src={logoWhite} alt="logo en blanc Harmoni" />
          <h1>Créez un environnement de travail inclusif</h1>
          <p>
            Bienvenue sur notre plateforme dédiée à l&apos;inclusion et à la
            diversité en entreprise. Nous aidons les entreprises à adopter des
            pratiques inclusives et à promouvoir la diversité. Découvrez comment
            nos services peuvent transformer votre culture d&apos;entreprise.
          </p>
          <a href="#CategorieComponent">
            <button>Découvrir nos conseils</button>
          </a>
        </div>
        <img src={pictCat} alt="pic-cat" />
        <About />
      </section>
      <CategorieComponent />
    </>
  );
}

export default Home;
