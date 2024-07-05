import { useState } from "react";

import "../styles/Form.css";

function Form() {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  return (
    <section className="form-component">
      <div className="text-container">
        <h1>D&apos;autres idées à nous partager?</h1>
        <h2>Restons Connectés et Engagés</h2>
        <p>
          Chez Harmonia, nous sommes dédiés à transformer les pratiques de
          travail pour créer des environnements plus inclusifs et équitables.
        </p>
        <p>
          Si vous souhaitez en savoir plus sur nos initiatives ou si vous avez
          des idées et des expériences à partager, n&apos;hésitez pas à nous
          contacter.
        </p>
        <p className="lastphrase">
          Ensemble, nous pouvons faire une différence significative
        </p>
      </div>
      <div className="form-container">
        <form
          className="form-container-2"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            className="name-container"
            required
            placeholder="Votre nom"
            name="lastName"
            value={contactForm.lastName}
            onChange={(e) => handleChangeForm(e)}
          />

          <input
            className="firstname-container"
            required
            placeholder="Votre Prénom"
            name="firstName"
            value={contactForm.firstName}
            onChange={(e) => handleChangeForm(e)}
          />

          <input
            className="mail-container"
            required
            placeholder="Votre E-mail"
            name="email"
            value={contactForm.email}
            onChange={(e) => handleChangeForm(e)}
          />

          <textarea
            required
            className="textarea-container"
            placeholder="Votre message"
            name="message"
            id="messagearea"
            cols="3"
            rows="10"
            value={contactForm.message}
            onChange={(e) => handleChangeForm(e)}
          />
          <div className="checkboxes">
            <input
              name="isGoing"
              type="checkbox"
              className="checkboxes-input"
            />
            <p>
              J&lsquo;accepte de recevoir des emails et des communications de
              Harmonia
            </p>
          </div>
          <div className="checkboxes">
            <input
              name="isGoing"
              type="checkbox"
              className="checkboxes-input"
            />
            <p>
              J&lsquo;accepte de recevoir la Newletter Harmonia. Restez informé
              des dernières tendances en matière d&lsquo;inclusion
            </p>
          </div>

          <button className="button-form" type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
