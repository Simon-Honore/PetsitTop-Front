import { Link, useParams } from 'react-router-dom';
import { MdPlace, MdChildFriendly } from 'react-icons/md';
import { RiMailFill } from 'react-icons/ri';
import { FaPaw } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import PetsittingDetails from './PetsittingDetails/PetsittingDetails';
import PetCard from './PetCard/PetCard';
import './PublicProfile.scss';
import { fetchPublicUserInfos } from '../../api/user';
import Loader from '../../components/Loader/Loader';
import AdCard from '../../components/AdCard/AdCard';
import ProfileAdCard from './ProfileAdCard/ProfileAdCard';

function PublicProfile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const publicUser = useSelector((state) => state.user.publicUser);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchPublicUserInfos(id));
    setIsLoading(false);
  }, []);

  const publicUserRole = publicUser.roles;
  let petsitter = false;
  let petowner = false;
  if (publicUserRole) {
    petsitter = !!publicUserRole.filter((role) => role.name === 'petsitter').length;
    petowner = !!publicUserRole.filter((role) => role.name === 'petowner').length;
  }

  return (
    <div className="PublicProfile">
      {isLoading
        ? <Loader />
        : (
          <>
            <section className="profile">
              <div className="profile__user">
                <div className="profile__user__infos">
                  <h1
                    className="profile__user__name"
                  >
                    {publicUser.first_name}
                    <br />
                    {publicUser.last_name}
                  </h1>
                  <p className="profile__user__location">
                    <MdPlace className="profile__user__location__icon" />
                    {`${publicUser.city} - ${publicUser.postal_code}`}
                  </p>
                  <p
                    className="profile__user__email"
                  >
                    <RiMailFill className="profile__user__email__icon" />
                    {publicUser.email}
                  </p>
                </div>

                <div
                  className="profile__user__right"
                >
                  <Link to={`mailto:${publicUser.email}`}>
                    <button
                      type="button"
                      className="profile__user__right__button"
                    >
                      <RiMailFill className="profile__user__right__button__icon" />
                      Contactez-moi
                    </button>
                  </Link>

                  <div className="profile__user__right__icons">
                    {petowner && (
                    <div className="profile__user__right__tags">
                      <FaPaw size="40" color="#c27453" />
                      <p> Petowner</p>
                    </div>
                    )}
                    {petsitter && (
                    <div className="profile__user__right__tags">
                      <MdChildFriendly size="40" color="#c27453" />
                      <p> Petsitter </p>
                    </div>
                    )}

                  </div>
                </div>
              </div>
              <p className="profile__user__description">{`"${publicUser.presentation}"`}</p>
            </section>

            <hr />

            <section className="pets">

              <h1 className="pets__title">Mes animaux</h1>
              <div className="profile__pets__items">
                {publicUser.pets && (publicUser.pets.length === 0 ? (
                  <p>Cet utilisateur n&#39;a pas d&#39;animaux pour le moment.</p>
                ) : '')}
                {publicUser.pets && publicUser.pets.map((pet) => (
                  <PetCard
                    className="pets__item peticon__title--white"
                    key={pet.id}
                    name={pet.name}
                    pet_type={pet.pet_type}
                    description={pet.presentation}
                  />
                ))}
              </div>
            </section>

            <hr />

            <section className="ads">
              <h1 className="ads__title">Je recherche</h1>
              {publicUser.ads && (publicUser.ads.length === 0 ? (
                <p>Cet utilisateur n&#39;a pas d&#39;annonce pour le moment.</p>
              ) : '')}
              {publicUser.ads && publicUser.ads.map((ad) => (
                <ProfileAdCard
                  key={ad.id}
                  title={ad.title}
                  content={ad.content}
                />
              ))}
            </section>
            <hr />

            {petsitter && (
            <PetsittingDetails
              isAvailable={publicUser.availability}
              details={publicUser.availability_details}
              pet_types={publicUser.pet_types}
            />
            )}
          </>
        )}

    </div>
  );
}

export default PublicProfile;
