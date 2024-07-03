import { useLocation } from "react-router-dom";

function Event() {
  const location = useLocation();
  const { member } = location.state;
  return (
    <section>
      <h1>{member.name} </h1>
    </section>
  );
}

export default Event;
