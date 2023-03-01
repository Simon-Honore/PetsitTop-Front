import { FaUserCircle } from 'react-icons/fa';
import './PetCard.scss';

function PetCard({name, pet_type, description}) {
    return(
      <div className="card">
        <div className="card__header">
          <div className="profile__pets__item__info">
            <div>
              <FaUserCircle size="2rem" className="" />
            </div>
            <div>
              <h1>{name}</h1>
              <h2>{pet_type}</h2>
            </div>
          </div>
        </div>

        <div>
          <p>
            {description}
          </p>
        </div>
      </div>
    )
}

export default PetCard;