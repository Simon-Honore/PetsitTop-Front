import { FiPlus } from 'react-icons/fi';
import UpdateMyProfile from './UpdateMyProfile/UpdateMyProfile';
import PetProfile from './PetProfile/PetProfile';

import './MyProfile.scss';

function MyProfile() {
  return (
    <div className="MyProfile">

      <UpdateMyProfile />

      <hr />

      <PetProfile />

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

  );
}

export default MyProfile;
