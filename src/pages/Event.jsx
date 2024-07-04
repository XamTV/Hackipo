import { useLocation } from "react-router-dom";

function Event() {
  const location = useLocation();
  const { event } = location.state;
  return (
    <section>
      <h1>{event.nom} </h1>
    </section>
  );
}

export default Event;
