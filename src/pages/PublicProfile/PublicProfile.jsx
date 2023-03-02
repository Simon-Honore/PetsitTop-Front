import { Link } from 'react-router-dom';

import { MdPlace, MdChildFriendly } from 'react-icons/md';
import { RiMailFill } from 'react-icons/ri';
import { FaPaw } from 'react-icons/fa';
import PetsittingDetails from './PetsittingDetails/PetsittingDetails';
import PetCard from './PetCard/PetCard';
import './PublicProfile.scss';

function PublicProfile({
  nom, prenom, ville, codePostal, description, animauxAcceptes,
}) {
  const petsitter = true;
  const petowner = true;
  const availability = true;

  return (
    <div className="PublicProfile">
      <section className="profile">
        <div className="profile__user">
          <div className="profile__user__infos">
            <h1
              className="profile__user__name"
            >
              Prénom
              <br />
              NOM
            </h1>
            <p className="profile__user__location">
              <MdPlace />
              {/* {`${ville} - ${codePostal}`} */}
              Ville - XXXXX
            </p>
            <p
              className="profile__user__email"
            >
              <RiMailFill />
              test@gmail.com
            </p>
          </div>

          <div
            className="profile__user__right"
          >
            <Link to="mailto:test@gmail.com">
              <button
                type="button"
                className="profile__user__right__button"
              >
                <RiMailFill />
                Contactez-moi
              </button>
            </Link>

            <div className="profile__user__right__tags">
              {petowner && <FaPaw size="40" />}
              {petsitter && <MdChildFriendly size="40" />}
            </div>
          </div>
        </div>
        <p className="profile__user__description">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab omnis laudantium quisquam fugit dignissimos adipisci delectus dolorem repellat? Veritatis alias earum, necessitatibus ex nesciunt molestiae ullam nobis iste totam nam."</p>
      </section>

      <hr />

      <section className="pets">

        <h1 className="pets__title">Mes animaux</h1>

        <PetCard
          className="pets__item"
          name="Médor"
          pet_type="Chien"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dicta eveniet quos, optio veritatis officia quam tempore pariatur magnam. Laudantium sequi quasi eum laboriosam mollitia, eos amet esse dolores accusamus."
        />
        <PetCard
          name="Félix"
          pet_type="Chat"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dicta eveniet quos, optio veritatis officia quam tempore pariatur magnam."
        />

      </section>

      <hr />

      <section className="ads">
        <h1 className="ads__title">Je recherche</h1>
        {/* Mettre composant annonce que Simon aura fait pour la page Toutes les annonces */}
      </section>
      <hr />

      {petsitter && <PetsittingDetails isAvailable={availability} />}

    </div>
  );
}

export default PublicProfile;
