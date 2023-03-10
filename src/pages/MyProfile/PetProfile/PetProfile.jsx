import { useState } from 'react';
import { FaUserCircle, FaTrashAlt } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import AddPet from './AddPet/AddPet';
import UpdatePet from './UpdatePet/UpdatePet';
import './PetProfile.scss';

function PetProfile() {
  const [showUpdatePet, setShowUpdatePet] = useState(false);

  const [addPet, setAddPet] = useState(false);

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
      <div className="profile__pets__item">
        <div className="profile__pets__item__top">
          <div className="profile__pets__item__info">
            <div>
              <FaUserCircle size="2rem" className="" />
            </div>
            <div>
              <h2>Médor</h2>
              <h3>Chien</h3>
            </div>
          </div>

          <div>
            <BsPencilSquare onClick={openUpdateForm} />
            <FaTrashAlt />
          </div>
        </div>
        <div className="profile__pets__item__description">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Commodi dicta eveniet quos, optio veritatis officia quam tempore pariatur magnam.
            Laudantium sequi quasi eum laboriosam mollitia, eos amet esse dolores accusamus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PetProfile;
