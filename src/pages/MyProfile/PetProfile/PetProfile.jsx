import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import AddPet from './AddPet/AddPet';
import UpdatePet from './UpdatePet/UpdatePet';
import PetCard from '../../../components/PetCard/PetCard';
import './PetProfile.scss';

function PetProfile({ pets }) {
  const [addPet, setAddPet] = useState(false);

  const switchState = (state, setState) => {
    setState(!state);
  };

  return (
    <div className="profile__pets">
      <div className="profile__pets__header">
        <h1 className="profile__pets__header__title">Mes animaux</h1>
        <button type="button" className="profile__pets__header__add" onClick={() => { switchState(addPet, setAddPet); }}>
          <FiPlus />
          Ajouter
        </button>
      </div>
      { addPet
        ? (
          <AddPet />
        ) : ''}

      {/* { showUpdatePet
        ? (
          <UpdatePet />
        ) : ''} */}

      <div className="profile__pets__items">
        { pets && pets.map((pet) => (
          <PetCard
            key={pet.id}
            name={pet.name}
            pet_type={pet.pet_type}
            presentation={pet.presentation}
          />
        ))}
      </div>
    </div>
  );
}

export default PetProfile;
