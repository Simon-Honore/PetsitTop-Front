import PetIcon from '../../../components/PetIcon/PetIcon';
import './PetCard.scss';

function PetCard({ name, pet_type, description }) {
  return (
    <div className="profile__pets__item">
      <div className="profile__pets__item__top">
        <div className="profile__pets__item__info">
          <div className="petsitter__card__peticon">
            <PetIcon pet={pet_type} />
          </div>
          <div className="card__header__title">
            <h1>{name}</h1>
            <h2>{pet_type}</h2>
          </div>
        </div>
      </div>

      <div className="profile__pets__item__description">
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}

export default PetCard;
