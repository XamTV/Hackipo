import "../styles/About.css";

import members from "../services/members";

function About() {
  return (
    <>
      <section className="AboutComponent">
        <h1 className="title-about">À propos de nous</h1>
        <p className="para-about">
          Notre histoire a commencé lors d&apos;un hackathon passionnant, où une
          équipe diverse de 9 étudiants - 2 web designers, 4 data scientists et
          3 développeurs - s&apos;est réunie autour d&apos;une vision commune:
        </p>
        <p className="sous-para-about">
          Transformer l&apos;inclusion en une réalité tangible pour toutes les
          entreprises.
        </p>
      </section>
      <section className="members-component">
        <div className="team-members-component">
          {members.map((member) => (
            <div key={member.name} className="member">
              <img
                src={member.photo}
                alt={member.name}
                className="member-pic"
              />
              <h1 className="member-name">{member.name}</h1>
              <p className="role-member">{member.role}</p>
            </div>
          ))}
        </div>
        <hr className="line"/>
      </section>
    </>
  );
}

export default About;
