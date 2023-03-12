/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import './Team.scss';

function Team() {
  return (
    <main className="team">
      <div className="team__header">
        <h1>Équipe</h1>
        <p>Le site petsitTop a été développé dans le cadre du projet d'Apothéose de la formation O'Clock "Développeur Fullstack JS".</p>
      </div>
      <div className="team__members">
        <div className="team__member">
          <img src="https://avatars.githubusercontent.com/u/113342126?v=4" alt="Simon" />
          <h2>Simon Honoré</h2>
          <h3>Product Owner <br />& Lead Dev Front</h3>
          <p>Simon n'a rien à envier aux autres lead devs : compétent, pédagogue, patient, pro du débugage, charmeur de reducers...</p>
          <p>Malheureusement pour vous, il est déjà marié.<br />
            Heureusement pour vous, il est ouvert aux opportunités sur Challans (85) et alentours ou en fullremote. 😉
          </p>
          <div className="team__member__links">
            <a href="https://www.linkedin.com/in/simon-honore/" target="_blank" rel="noreferrer">Linkedin</a>
          </div>
        </div>
        <div className="team__member">
          <img src="https://avatars.githubusercontent.com/u/111069852?v=4" alt="Ines" />
          <h2>Ines Dai</h2>
          <h3>Scrum Master <br /> & Dev Front</h3>
          <p></p>
          <div className="team__member__links">
            <a href="https://www.linkedin.com/in/ines-a-d/" target="_blank" rel="noreferrer">Linkedin</a>
          </div>
        </div>
        <div className="team__member">
          <img src="https://avatars.githubusercontent.com/u/113342270?v=4" alt="Axelle" />
          <h2>Axelle Skica</h2>
          <h3>Git Master <br /> & Dev Back</h3>
          <p>Etoile montante du dev backend, Axelle a de nombreuses cordes à son arc : marketing digital, crochet et yoga pour n'en citer que 3.</p>
          <p>S'il fallait toutes les lister, il faudrait probablement les stocker dans une base de données. <br />
            Ca tombe bien : c'est sa spécialité.
          </p>
          <p>A l'écoute d'opportunités sur Clermont-Ferrand (63) et sa périphérie, dans la limite des pistes cyclables. 🚴</p>
          <div className="team__member__links">
            <a href="https://www.linkedin.com/in/axelle-skica/" target="_blank" rel="noreferrer">Linkedin</a>
          </div>
        </div>
        <div className="team__member">
          <img src="https://avatars.githubusercontent.com/u/113336393?v=4" alt="Catherine" />
          <h2>Catherine Keller</h2>
          <h3>Lead Dev Back <br /> & renfort Front</h3>
          <p>Le couteau suisse de l'équipe : graphiste, intégratrice, chargée de communication, dev back, dev front... <br /> Catherine manie le web comme elle manie la harpe 🎵</p>
          <p>Disponible pour travailler ou pour danser sur Bischoffsheim (67) et alentours ou en fullremote.</p>
          <div className="team__member__links">
            <a href="https://www.linkedin.com/in/kellercatherine/" target="_blank" rel="noreferrer">Linkedin</a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Team;
