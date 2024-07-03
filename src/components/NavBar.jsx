/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ projects }) {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  console.log("navbar", projects);
  return (
    <section className="NavBarComponent">
      <nav>
        <Link to="/"> Accueil </Link>
        <select
          onChange={(e) => navigate(`/categorie/${e.target.value}`)}
          name="categorie-selection"
          id="categorie-selection"
        >
          {projects?.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
        <input
          className="Search"
          type="text"
          placeholder="Chercher un évenement &#128269;"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
      </nav>
    </section>
  );
}

export default NavBar;
