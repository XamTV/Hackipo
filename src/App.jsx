import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import projects from "./services/projects";

function App() {
  return (
    <section>
      <NavBar projects={projects} />
      <Outlet context={{ projects }} />
      <Footer />
    </section>
  );
}

export default App;
