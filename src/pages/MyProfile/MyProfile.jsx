import { FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import UpdateMyProfile from './UpdateMyProfile/UpdateMyProfile';
import PetProfile from './PetProfile/PetProfile';
import { fetchConnectedUserInfos } from '../../api/user';
import './MyProfile.scss';

function MyProfile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchConnectedUserInfos());
  }, []);

  const connectedUser = useSelector((state) => state.user.connectedUser);
  console.log('connectedUser >> ', connectedUser);
  return (
    <div className="MyProfile">

      <UpdateMyProfile
        firstName={connectedUser.first_name}
        lastName={connectedUser.last_name}
        email={connectedUser.email}
        postalCode={connectedUser.postal_code}
        city={connectedUser.city}
        description={connectedUser.description}
        role={connectedUser.role}
      />

      <hr />

      <PetProfile
        pets={connectedUser.pets}
      />

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
