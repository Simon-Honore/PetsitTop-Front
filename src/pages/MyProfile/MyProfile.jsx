import { FiPlus } from 'react-icons/fi';
import { FaUserCircle, FaTrashAlt } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';

import Header from '../../components/Header/Header';
import UpdateMyProfile from '../../components/UpdateMyProfile/UpdateMyProfile';
import './MyProfile.scss';
import { useState } from 'react';

function MyProfile() {
  const [showUpdatePet, setShowUpdatePet] = useState(false);
  const [addPet, setAddPet] = useState(false);

  const openUpdateForm = () => {
    setShowUpdatePet(!showUpdatePet);
    console.log('clicked');
  };

  const switchState = (state, setState) => {
    setState(!state);
    console.log('it works');
  };

  return (
    <div className="MyProfile">
      <UpdateMyProfile />

      <hr />

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
            <div className="conditionnal">
              <h1>J'ajoute mon animal</h1>

              <form>
                <div>
                  <label htmlFor="">Nom de mon animal : *</label>
                  <input type="text" name="" id="" />
                </div>

                <div>
                  <label htmlFor="">Type d'animal : *</label>
                  <select name="" id="">
                    <option value="chien">Chien</option>
                    <option value="chat">Chat</option>
                    <option value="NAC">NAC</option>
                    <option value="poisson">Poisson</option>
                    <option value="reptile">Reptile</option>
                    <option value="oiseau">Oiseau</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="">Présentation de mon animal : *</label>
                  <textarea name="" id="" cols="30" rows="10" />
                </div>

                <button type="submit">Valider</button>
              </form>
              <button type="button">Annuler</button>
            </div>
          ) : ''}

        { showUpdatePet
          ? (
            <div className="conditionnal">
              <h1>Mettre à jour mon animal</h1>

              <form>
                <div>
                  <label htmlFor="">Nom de mon animal : *</label>
                  <input type="text" name="" id="" />
                </div>

                <div>
                  <label htmlFor="">Type d'animal : *</label>
                  <select name="" id="">
                    <option value="chien">Chien</option>
                    <option value="chat">Chat</option>
                    <option value="NAC">NAC</option>
                    <option value="poisson">Poisson</option>
                    <option value="reptile">Reptile</option>
                    <option value="oiseau">Oiseau</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="">Présentation de mon animal : *</label>
                  <textarea name="" id="" cols="30" rows="10" />
                </div>

                <button type="submit">Mettre à jour</button>
              </form>
              <button type="button">Annuler</button>
            </div>
          ) : ''}
        <div className="profile__pets__item">
          <div className="profile__pets__item__top">
            <div className="profile__pets__item__info">
              <div>
                <FaUserCircle size="2rem" className="" />
              </div>
              <div>
                <h1>Médor</h1>
                <h2>Chien</h2>
              </div>
            </div>

            <div>
              <BsPencilSquare onClick={openUpdateForm} />
              <FaTrashAlt />
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dicta eveniet quos, optio veritatis officia quam tempore pariatur magnam. Laudantium sequi quasi eum laboriosam mollitia, eos amet esse dolores accusamus.
            </p>
          </div>
        </div>

        <hr />

        <div className="profile__ads">
          <h1>Mes annonces</h1>
          <button type="button">
            <FiPlus />
            Ajouter une annonce
          </button>
          <button type="button">
            Afficher/Gérer mes annonces
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
