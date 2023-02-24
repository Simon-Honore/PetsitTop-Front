import { MdPlace } from 'react-icons/md';
import './PetsitterCard.scss';

function PetsitterCard({
  nom, prenom, ville, codePostal, description, animauxAcceptes,
}) {
  return (
    <div className="petsitter__card">
      <div className="petsitter__card__header">
        <h1 className="petsitter__card__title">
          {`${prenom} ${Array.from(nom)[0]}.`}
        </h1>
        <p className="petsitter__card__location">
          <MdPlace />
          {' '}
          {`${ville} - ${codePostal}`}
        </p>
      </div>
      <p>{description}</p>
      <p> Je peux garder vos :</p>
      {/* {console.log(animauxAcceptes)} */}
      {animauxAcceptes.map((animal) => (
        <p>
          {' '}
          {animal}
          {' '}
        </p>
      ))}
    </div>
  );
}

export default PetsitterCard;
