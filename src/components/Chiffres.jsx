import "../styles/Chiffres.css";

function Chiffres() {
  return (
    <section className="ChiffresComponent">
      <header>
        <h1>Quelques Chiffres</h1>

        <p>Les entreprises inclusives ont</p>
      </header>

      <section className="chiffre-articles">
        <article>
          <h1>67%</h1>
          <p>
            des candidats qui recherchent des employeurs engagés dans la
            diversité.
          </p>
        </article>
        <article>
          <h1>50%</h1>
          <p>
            en plus d'avoir une meilleure réputation auprès des clients et des
            partenaires
          </p>
        </article>
        <article>
          <h1>35%</h1>
          <p>
            plus de succès financier et attirent des candidats engagés dans la
            diversité.
          </p>
        </article>
      </section>
    </section>
  );
}

export default Chiffres;
