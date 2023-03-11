import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import PetIcon from '../PetIcon/PetIcon';

import './PetCard.scss';

function PetCard({ name, pet_type, presentation }) {
  const [showUpdatePet, setShowUpdatePet] = useState(false);

  const openUpdateForm = () => {
    setShowUpdatePet(!showUpdatePet);
    console.log('clicked');
  };

  return (
    <div className="profile__pets__item">
      <div className="profile__pets__item__top">
        <div className="profile__pets__item__info">
          <div>
            <div className="petsitter__card__peticon">
              <PetIcon pet={pet_type} />
            </div>
          </div>
          <div>
            <h2>{name}</h2>
            <h3>{pet_type}</h3>
          </div>
        </div>

        <div className="profile__pets__item__btns">
          <BsPencilSquare onClick={openUpdateForm} />
          <FaTrashAlt />
        </div>
      </div>
      <div className="profile__pets__item__description">
        <p>
          {presentation}
        </p>
      </div>
    </div>
  );
}

export default PetCard;
