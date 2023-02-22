import { FiPlus } from 'react-icons/fi';
import { FaUserCircle, FaTrashAlt } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';

import Header from '../../components/Header/Header';
import IdentificationForm from '../../components/IdentificationForm/IdentificationForm';
import './MyProfile.scss';

function MyProfile() {

  return (
    <div className="MyProfile">
      <IdentificationForm />

      <hr />

      <div className="profile__pets">
        <div className="profile__pets__header">
          <h1 className="profile__pets__header__title">Mes animaux</h1>
          <button type="button">
            <FiPlus />
            Ajouter
          </button>
        </div>

        <div className="profile__pets__item">
          <div>
            <div>
              <FaUserCircle size="2rem" className="" />
            </div>
            <div>
              <h1>Médor</h1>
              <h2>Chien</h2>
            </div>
            <div>
              <BsPencilSquare />
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
          <h1>Mes animaux</h1>
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
