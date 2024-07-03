import Members from "./Members";

function About() {
  return (
    <section className="AboutComponent">
      <h1>À propos de nous</h1>

      <p>
        Notre histoire a commencé lors d&apos;un hackathon passionnant, où une
        équipe diverse de 9 étudiants - 2 web designers, 4 data scientists et 3
        développeurs - s&apos;est réunie autour d&apos;une vision commune :
        transformer l&apos;inclusion en une réalité tangible pour toutes les
        entreprises.
      </p>
      <Members />
    </section>
  );
}

export default About;
