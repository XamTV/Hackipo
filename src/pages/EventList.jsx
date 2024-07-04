import { Link, useLocation, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

function EventList() {
  const location = useLocation();
  const { category } = location.state;
  const { id } = useParams();

  const [categoryDetails, setCategoryDetails] = useState();

  useEffect(() => {
    axios.get(`http://62.35.135.195:5000/get/cat${id}`).then((res) => {
      setCategoryDetails(Object.values(res.data));
    });
  }, [categoryDetails, id]);

  return (
    <>
      <section className="EventListComponent">
        <h1>{category.titre} </h1>
        <p>{category.descr}</p>
      </section>
      <section>
        <h1>Liste des événements</h1>
        <ul>
          {categoryDetails?.map((detail) => (
            <>
              {Object.values(detail.liste_event).map((event) => (
                <Link
                  to={`/event/${event.id_event}`}
                  key={event.id_event}
                  state={{ event }}
                >
                  {event.nom}
                </Link>
              ))}
            </>
          ))}
        </ul>
      </section>
    </>
  );
}

export default EventList;
