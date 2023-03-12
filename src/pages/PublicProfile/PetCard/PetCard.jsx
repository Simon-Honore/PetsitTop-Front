import PetIcon from '../../../components/PetIcon/PetIcon';
import './PetCard.scss';

function PetCard({ name, pet_type, description }) {
  return (
    <div className="card">
      <div className="card__header">
        <div>
          <PetIcon pet={pet_type} />
        </div>
        <div className="card__header__title">
          <h1>{name}</h1>
          <h2>{pet_type}</h2>
        </div>
      </div>

      <div>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}

export default PetCard;
