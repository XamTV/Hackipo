import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function Event() {
  const location = useLocation();
  const { event } = location.state;

  const { id } = useParams();

  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    axios.get(`http://62.35.135.195:5000/get/event_${id}`).then((res) => {
      setEventDetails(Object.values(res.data));
      console.log();
    });
  }, [eventDetails, id]);

  return (
    <section>
      <h1>{event.nom} </h1>
      <h2>Choses a mettre en place au sein de l&apos;entreprise</h2>
      <ol>
        {eventDetails?.map((event) => (
          <>
            {Object.values(event.conseil).map((conseil) => (
              <section key={conseil.id}>
                <li>{conseil.nom} </li>
              </section>
            ))}
          </>
        ))}
      </ol>
    </section>
  );
}

export default Event;
