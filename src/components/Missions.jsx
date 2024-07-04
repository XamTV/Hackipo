import "../styles/Missions.css";

function Missions() {
  return (
    <div className="mission-container">
      <section className="notremission">
        <div className="nm1">
          <h2 className="mission-title">Notre Mission</h2>
          <p>
            Transformer le monde professionnel en un espace où chacun se sent
            valorisé et respecté. Nous croyons en un monde professionnel où
            chaque individu peut s&apos;épanouir, indépendamment de son origine,
            son genre, son âge ou ses capacités.
          </p>
          <h3 className="mission-title">Notre Bilan</h3>
          <p>
            Utilisez ce formulaire pour évaluer l&apos;inclusivité de votre
            entreprise et découvrir comment renforcer votre culture
            d&apos;ntreprise inclusive.
          </p>
          <div className="nm1-1">
            <div className="divcolor"></div>
            <div className="nm1-2">
              <h4>Analyse Inclusivité</h4>
              <p>
                Remplissez le formulaire pour analyser l&apos;inclusivité de
                votre entreprise.
              </p>
              <h4>Évaluation de l&apos;Inclusion</h4>
              <p>
                Évaluez les pratiques inclusives de votre entreprise pour
                identifier les forces et les axes d&apos;amélioration.
              </p>
              <h4>Diagnostic d&apos;Inclusion</h4>
              <p>
                Recevez un résumé de l&apos;évaluation sur l&apos;inclusion,
                mettant en lumière les points forts et des conseils.
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
      <button className="button-mission">Découvrir nos conseils</button>
    </div>
  );
}

export default Missions;
