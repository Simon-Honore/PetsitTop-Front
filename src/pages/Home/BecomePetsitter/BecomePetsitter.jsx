import { Link } from 'react-router-dom';
import { bool } from 'prop-types';

// import local
import './BecomePetsitter.scss';

function BecomePetsitter({ isLogged }) {
  return (
    <section className="become-petsitter">
      <h3 className="become-petsitter__title">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, obcaecati.
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
    </section>
  );
}

export default BecomePetsitter;

BecomePetsitter.propTypes = {
  isLogged: bool.isRequired,
};
