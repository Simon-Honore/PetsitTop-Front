/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import './Team.scss';

function Team() {
  return (
    <main className="team">
      <h1>Équipe</h1>
      <p>Le site petsitTop a été développé dans le cadre du projet d'Apothéose de la formation O'Clock "Développeur Fullstack JS".</p>
      <div className="team__members">
        <div className="team__member">
          <img src="https://avatars.githubusercontent.com/u/113342126?v=4" alt="Simon" />
          <h2>Simon Honoré</h2>
          <h3>Project Owner <br />& Lead Dev Front</h3>
          <p>Brève description Simon</p>
          <div className="team__member__links">
            <a href="https://www.linkedin.com/in/simon-honore/" target="_blank" rel="noreferrer">Linkedin</a>
          </div>
        </div>
        <div className="team__member">
          <img src="https://avatars.githubusercontent.com/u/111069852?v=4" alt="Ines" />
          <h2>Ines Dai</h2>
          <h3>Srum Master</h3>
          <p>Description</p>
          <div className="team__member__links">
            <a href="https://www.linkedin.com/in/ines-a-d/" target="_blank" rel="noreferrer">Linkedin</a>
          </div>
        </div>
        <div className="team__member">
          <img src="https://avatars.githubusercontent.com/u/113342270?v=4" alt="Axelle" />
          <h2>Axelle Skica</h2>
          <h3>Git Master</h3>
          <p>Description</p>
          <div className="team__member__links">
            <a href="https://www.linkedin.com/in/axelle-skica/" target="_blank" rel="noreferrer">Linkedin</a>
          </div>
        </div>
        <div className="team__member">
          <img src="https://avatars.githubusercontent.com/u/113336393?v=4" alt="Catherine" />
          <h2>Catherine Keller</h2>
          <h3>Lead Dev Back</h3>
          <p>Description</p>
          <div className="team__member__links">
            <a href="https://www.linkedin.com/in/kellercatherine/" target="_blank" rel="noreferrer">Linkedin</a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Team;
