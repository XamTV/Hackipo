import members from "../services/members";

function Members() {
  return (
    <section className="MembersComponent">
      {members.map((member) => (
        <div key={member.name} className="member">
          <h4>{member.name}</h4>
          <img src={member.photo} alt={member.name} />
          <p>{member.role}</p>
        </div>
      ))}
    </section>
  );
}

export default Members;
