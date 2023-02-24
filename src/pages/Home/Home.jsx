import { Link } from 'react-router-dom';

import InputSelectDepartment from '../../components/InputSelectDepartment/InputSelectDepartment';
import InputSelectTypePet from '../../components/InputSelectTypePet/InputSelectTypePet';
import './Home.scss';

function Home() {
  return (
    <main className="main-home">
      <p className="main-home__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore autem quisa , natus velit quod optio iure dicta architecto expedita
      </p>

      <section className="search-petsitters">
        <h3 className="search-petsitters__title">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, obcaecati.
        </h3>

        <form className="search-petsitters__form">
          <InputSelectDepartment />

          <InputSelectTypePet className="search-petsitters__form__type" />

          <button type="submit" className="search-petsitters__form__btn__submit"><Link to="/resultats">Rechercher</Link></button>

        </form>
        <p className="search-petsitters__form__separator">ou</p>

        <button type="button" className="search-petsitters__form__btn__link">
          <Link
            to="/#"
          >
            Créer une annonce
          </Link>
        </button>
      </section>

      <section className="become-petsitter">
        <h3 className="become-petsitter__title">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, obcaecati.
        </h3>

        <button type="button" className="become-petsitter__btn">
          <Link
            to="/indentification"
          >
            Devener Petsitter
          </Link>
        </button>
      </section>
    </main>
  );
}

export default Home;
