import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/CategorieComponent.css";
function CategorieComponent() {
  const [categorieData, setCategorieData] = useState([{}]);

  useEffect(() => {
    axios.get(`http://62.35.135.195:5000/get/categorie`).then((res) => {
      setCategorieData(Object.values(res.data));
    });
  }, []);

  return (
    <>
      <header className="CategoriesHeader">
        <h1 className="categories-title">Catégories</h1>
        <h2 className="cate-ss-title">
          Découvrez nos domaines d&apos;expertise pour une entreprise
          véritablement inclusive
        </h2>
        <p className="cate-para">
          Cliquez sur chaque catégorie pour explorer nos événements, conseils
          pratiques et ressources dédiés. Ensemble, construisons un lieu de
          travail où chacun peut s&apos;épanouir pleinement.
        </p>
      </header>
      <section className="CategoriesComponent">
        {categorieData.map((category) => (
          <section key={category.id} className="CategoryComponent">
            <img
              src={category.image}
              alt={category.titre}
              className="category-logo"
            />
            <h1 className="category-title">{category.titre} </h1>
            <p className="para-cate-compo">{category.descr}</p>
            <Link to={`/categorie/${category.id}`} state={{ category }}>
              En savoir plus
            </Link>
          </section>
        ))}
        
      </section>
    </>
  );
}

export default CategorieComponent;
