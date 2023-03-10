import { useState } from 'react';
import { FaUserCircle, FaTrashAlt } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import AddPet from './AddPet/AddPet';
import UpdatePet from './UpdatePet/UpdatePet';
import PetCard from '../../../components/PetCard/PetCard';
import './PetProfile.scss';

function PetProfile({ pets }) {
  const [showUpdatePet, setShowUpdatePet] = useState(false);

  const [addPet, setAddPet] = useState(false);

  console.log('pets-profil', pets);

  const switchState = (state, setState) => {
    setState(!state);
    console.log('it works');
  };

  const openUpdateForm = () => {
    setShowUpdatePet(!showUpdatePet);
    console.log('clicked');
  };

  return (
    <div className="profile__pets">
      <div className="profile__pets__header">
        <h1 className="profile__pets__header__title">Mes animaux</h1>
        <button type="button" onClick={() => { switchState(addPet, setAddPet); }}>
          <FiPlus />
          Ajouter
        </button>
      </div>
      { addPet
        ? (
          <AddPet />
        ) : ''}

      { showUpdatePet
        ? (
          <UpdatePet />
        ) : ''}

      { pets && pets.map((pet) => (
        <PetCard
          key={pet.id}
          name={pet.name}
          pet_type={pet.pet_type}
          presentation={pet.presentation}
        />
      ))}
    </div>
  );
}

export default PetProfile;
