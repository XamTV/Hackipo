import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import Form from "../components/Form.jsx";

import "../styles/Event.css";

function Event() {
  const location = useLocation();
  const { detail } = location.state;

  const { id } = useParams();

  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    axios.get(`http://62.35.135.195:5000/get/event_${id}`).then((res) => {
      setEventDetails(Object.values(res.data));
      console.log();
    });
  }, [eventDetails, id]);

  return (
    <>
      {eventDetails?.map((event) => (
        <section key={event.id} className="EventComponent">
          <header
            className={`event-container background-${event.id_categorie}`}
          >
            <div className="title-pic">
              <img src={detail.image} alt="pictogramme de la categorie" />
              <h1 className="event-title">{detail.titre} </h1>
            </div>
            <h2 className="second-event-title">{event.titre} </h2>
            <p className="first-para-event">{event.date} </p>
          </header>
          <section className="event-description">
            <p className="para-event">{event.descr} </p>
            <img src={event.image} alt="logo lié a l'evenement" />
          </section>
          <hr className={`advice-line specline-${event.id_categorie}`} />
          <section className="advice-list">
            <h1 className="second-title-event">
              Conseils pour une Célébration Engagée et Inclusive
            </h1>
            <div className="li-component">
              <ol>
                {Object.values(event.conseil).map((conseil) => (
                  <>
                    <li
                      className={`color-${event.id_categorie}`}
                      key={conseil.id}
                    >
                      {conseil.nom}{" "}
                    </li>
                    <hr
                      className={`advice-line-list specline-${event.id_categorie}`}
                    />
                  </>
                ))}
              </ol>
            </div>
          </section>
        </section>
      ))}
      <Form />
    </>
  );
}

export default Event;
