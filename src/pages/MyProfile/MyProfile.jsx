import { FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import UpdateMyProfile from './UpdateMyProfile/UpdateMyProfile';
import PetProfile from './PetProfile/PetProfile';
import { deleteAccount, fetchConnectedUserInfos } from '../../api/user';
import './MyProfile.scss';
import { logout } from '../../store/reducers/user';
import { resetResearchPetsitters } from '../../store/reducers/petsitters';
import { resetFieldsUpdateAccount } from '../../store/reducers/updateAccount';
import Loader from '../../components/Loader/Loader';

function MyProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const connectedUser = useSelector((state) => state.user.connectedUser);

  useEffect(() => {
    dispatch(fetchConnectedUserInfos());
    setIsLoading(false);
  }, []);

  const [confirmDelete, setConfirmDelete] = useState(false);

  function handleDeleteAccount() {
    setConfirmDelete(true);
    const timer = setTimeout(() => {
      setConfirmDelete(false);
    }, 6000);
    return () => clearTimeout(timer);
  }

  function handleConfirmDeleteAccount() {
    dispatch(deleteAccount());
    localStorage.clear();
    dispatch(logout());
    dispatch(resetResearchPetsitters());
    dispatch(resetFieldsUpdateAccount());
    navigate('/');
  }

  return (
    <div className="MyProfile">

      {isLoading
        ? <Loader />
        : (
          <div>
            <UpdateMyProfile />
            <hr />
            <PetProfile
              pets={connectedUser.pets}
            />
          </div>
        )}
      <hr />

      <div className="profile__ads">
        <h1>Mes annonces</h1>
        <div className="profile__ads__btns">
          <Link to="/creer-une-annonce">
            <button type="button" className="profile__ads__btn--add">
              <FiPlus />
              Ajouter une annonce
            </button>
          </Link>
          <Link to="/mes-annonces">
            <button type="button" className="profile__ads__btn--disp">
              Afficher / Gérer mes annonces
            </button>
          </Link>
        </div>
      </div>

      <div className="profile__delete">
        {confirmDelete
          ? (
            <button
              type="button"
              className="profile__delete__btn profile__delete__btn--confirm"
              onClick={handleConfirmDeleteAccount}
            >
              SUR DE VOULOIR NOUS QUITTER ?
            </button>
          )
          : (
            <button
              type="button"
              className="profile__delete__btn"
              onClick={handleDeleteAccount}
            >
              SUPPRIMER MON COMPTE
            </button>
          )}
      </div>
    </div>

  );
}

export default MyProfile;
