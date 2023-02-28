import { Link } from 'react-router-dom';

import { MdPlace, MdChildFriendly } from 'react-icons/md';
import { RiMailFill } from 'react-icons/ri';
import { FaPaw } from 'react-icons/fa';
import './PublicProfile.scss';

function PublicProfile({
  nom, prenom, ville, codePostal, description, animauxAcceptes,
}) {
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
              >
                Contactez-moi
              </button>
            </Link>

            <div className="profile__user__right__tag">
              <MdChildFriendly />
              <FaPaw />
            </div>
          </div>
        </div>
        <p className="profile__user__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab omnis laudantium quisquam fugit dignissimos adipisci delectus dolorem repellat? Veritatis alias earum, necessitatibus ex nesciunt molestiae ullam nobis iste totam nam.</p>
      </section>

      <hr />

      <section className="pets" />

      <hr />

      <section className="ads" />

      <hr />

      <section className="petsitting" />

    </div>
  );
}

export default PublicProfile;
