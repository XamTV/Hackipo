/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/NavBar.css";
import logoNav from "../assets/logoNav.webp";
import profil from "../assets/profil.png";
import axios from "axios";

function NavBar() {
  const [searchInput, setSearchInput] = useState("");
  const [categorieData, setCategorieData] = useState([{}]);

  useEffect(() => {
    axios.get(`http://62.35.135.195:5000/get/categorie`).then((res) => {
      setCategorieData(Object.values(res.data));
    });
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <section className="NavBarComponent">
      <img src={logoNav} alt="logo Harmonia" className="logo-nav" />
      <nav>
        <Link to="/"> Accueil </Link>
        <select name="categorie-selection" id="categorie-selection">
          <option value="">Catégories</option>
          {categorieData?.map((project) => (
            <option key={project.id} value={project.id}>
              {project.titre}
            </option>
          ))}
        </select>
        <Link> Reconnaissance</Link>
        <Link> Notre Bilan </Link>
        <input
          className="Search"
          type="text"
          placeholder="Chercher un évenement"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
         <img src={profil} alt="logo utilisateur" />
      </nav>
     
    </section>
  );
}

export default NavBar;
