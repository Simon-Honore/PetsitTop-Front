import { Link } from 'react-router-dom';
import { bool } from 'prop-types';

// import local
import './BecomePetsitter.scss';

function BecomePetsitter({ isLogged }) {
  return (
    <section className="become-petsitter">
      <div className="become-petsitter__container">
        <h3 className="become-petsitter__title">
          Vous souhaitez prendre soin d'animaux durant l'absence de leur propriétaire ?
        </h3>

        {isLogged
          ? (
            <button type="button" className="become-petsitter__btn">
              <Link
                to="/annonces"
              >
                Voir toutes les annonces
              </Link>
            </button>
          )
          : (
            <button type="button" className="become-petsitter__btn">
              <Link
                to="/identification"
              >
                Devenez Petsitter
              </Link>
            </button>
          )}
      </div>
    </section>
  );
}

export default BecomePetsitter;

BecomePetsitter.propTypes = {
  isLogged: bool.isRequired,
};
