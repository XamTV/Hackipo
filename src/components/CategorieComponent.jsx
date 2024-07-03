import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CategorieComponent() {
  const [categorieData, setCategorieData] = useState([{}]);

  useEffect(() => {
    axios.get(`http://62.35.135.195:5000/get/categorie`).then((res) => {
      setCategorieData(Object.values(res.data));
    });
  }, []);

  return (
    <>
      {categorieData.map((category) => (
        <section key={category.id}>
          <img src={category.image} alt={category.titre} />
          <h1>{category.titre} </h1>
          <p>{category.descr}</p>
          <Link to={`/categorie/${category.id}`} state={{ category }}>
            En savoir plus
          </Link>
        </section>
      ))}
    </>
  );
}

export default CategorieComponent;
