import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

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
          <header>
            <img src={detail.image} alt="lol" />
            <h1>{detail.titre} </h1>
            <h2>{event.titre} </h2>
            <p>{event.date} </p>
          </header>
          <section className="advice-list">
            <img src={event.image} alt="" />
            <p>{event.descr} </p>
            <h1>Conseils pour une Célébration Engagée et Inclusive</h1>
            <ol>
              {Object.values(event.conseil).map((conseil) => (
                <li key={conseil.id}>{conseil.nom} </li>
              ))}
            </ol>
          </section>
        </section>
      ))}
    </>
  );
}

export default Event;
