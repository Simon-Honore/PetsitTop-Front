import { string, number, arrayOf } from 'prop-types';
import { MdPlace } from 'react-icons/md';
import './PetsitterCard.scss';

function PetsitterCard({
  nom, prenom, ville, codePostal, description, animauxAcceptes,
}) {
  return (
    <div className="petsitter__card">
      <div className="petsitter__card__header">
        <h1 className="petsitter__card__title">
          {/* la fonction array.from permet d'obtenir la lettre à l'index 0 (ex : Dupont -> D.) */ }
          {`${prenom} ${Array.from(nom)[0]}.`}
        </h1>
        <p className="petsitter__card__location">
          <MdPlace />
          {`${ville} - ${codePostal}`}
        </p>
      </div>
      <p>{description}</p>
      <ul> Je peux garder vos :</ul>
      {animauxAcceptes.map((animal) => (
        <li>
          {animal}
        </li>
      ))}
    </div>
  );
}

export default PetsitterCard;

PetsitterCard.propTypes = {
  nom: string.isRequired,
  prenom: string.isRequired,
  ville: string.isRequired,
  codePostal: number.isRequired,
  description: string.isRequired,
  animauxAcceptes: arrayOf(string).isRequired,
};
