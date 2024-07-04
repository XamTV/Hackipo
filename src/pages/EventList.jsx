import { Link, useLocation, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Form.jsx";
import "../styles/EventList.css";

function EventList() {
  const location = useLocation();
  const { category } = location.state;
  const { id } = useParams();

  const [categoryDetails, setCategoryDetails] = useState();

  useEffect(() => {
    axios.get(`http://62.35.135.195:5000/get/cat${id}`).then((res) => {
      setCategoryDetails(Object.values(res.data));
    });
  }, [id]);
  console.log(categoryDetails);
  return (
    <>
      {categoryDetails?.map((detail) => (
        <>
          <section className={`EventListComponent background-${id}`}>
            <div className="header-content">
              <h1> {category.titre}</h1>

              <p className="eventlist-desc">{category.descr} </p>
            </div>
            <img src={detail.logo} alt="" className="eventlist-logo" />
          </section>
          <hr className={`line-${id}`} />

          <section className="EventListContainer">
            <h1>Liste des événements</h1>
            <p>
              Cliquez sur chaque évènement pour explorer nos conseils pratiques
              et ressources dédiés.
            </p>
            <ul>
              {Object.values(detail.liste_event).map((event) => (
                <li key={event.id}>
                  {event.nom} - {event.date}
                  <Link
                    to={`/event/${event.id_event}`}
                    state={{ detail }}
                    className={`button button-${id}`}
                  >
                    En savoir plus
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </>
      ))}
      <Form />
    </>
  );
}

export default EventList;
