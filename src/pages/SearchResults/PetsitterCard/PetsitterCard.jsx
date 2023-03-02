import { string, number, arrayOf } from 'prop-types';
import { MdPlace } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './PetsitterCard.scss';

function PetsitterCard({
  id, nom, prenom, ville, codePostal, description, animauxAcceptes,
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
        <li key={animal.id}>
          {animal}
        </li>
      ))}

      <div className="petsitter__card__buttons">
        <Link
          key={id}
          nom={nom}
          prenom={prenom}
          ville={ville}
          code_postal={codePostal}
          description={description}
          animaux_acceptes={animauxAcceptes}
          to={`/profil/${id}`}
        >
          <button
            type="button"
            className="petsitter__card__buttons__details"
          >
            voir le profil
          </button>
        </Link>
        <button
          type="button"
          className="petsitter__card__buttons__contact"
        >
          contacter
        </button>
      </div>
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
