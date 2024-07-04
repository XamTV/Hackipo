import "../styles/Home.css";
import "../App.css";

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
      <section className="notremission">
        <div className="nm1">
          <h2>Notre Mission</h2>
          <p>
            Transformer le monde professionnel en un espace où chacun se sent{" "}
            <br />
            valorisé et respecté. Nous croyons en un monde professionnel où{" "}
            <br />
            chaque individu peut s'épanouir, indépendamment de son origine,{" "}
            <br />
            son genre, son âge ou ses capacités.
          </p>
          <h3>Notre Bilan</h3>
          <p>
            Utilisez ce formulaire pour évaluer l'inclusivité de votre <br />
            entreprise et découvrir comment renforcer votre culture <br />{" "}
            d'entreprise inclusive.
          </p>
          <div className="nm1-1">
            <div className="divcolor"></div>
            <div className="nm1-2">
              <h4>Analyse Inclusivité</h4>
              <p>
                Remplissez le formulaire pour analyser l'inclusivité de votre
                entreprise.
              </p>
              <h4>Évaluation de l'Inclusion</h4>
              <p>
                Évaluez les pratiques inclusives de votre entreprise pour
                identifier les forces et les axes d'amélioration.
              </p>
              <h4>Diagnostic d'Inclusion</h4>
              <p>
                Recevez un résumé de l'évaluation sur l'inclusion, mettant en
                lumière les points forts et des conseils.
              </p>
            </div>
          </div>
        </div>
        <div className="nm2">
          <img
            src="../src/assets/onestensemble.png"
            alt=""
            className="imgdivnotremission"
          />
        </div>
      </section>
    </>
  );
}

export default Home;
