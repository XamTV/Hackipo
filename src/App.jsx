import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import projects from "./services/projects";

import "../src/App.css";

function App() {
  return (
    <section>
      <NavBar projects={projects} />
      <Outlet />
      <Footer />
    </section>
  );
}

export default App;
