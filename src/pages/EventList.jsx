import { useLocation, useParams } from "react-router-dom";

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

      console.log();
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
        <ul></ul>
      </section>
    </>
  );
}

export default EventList;
