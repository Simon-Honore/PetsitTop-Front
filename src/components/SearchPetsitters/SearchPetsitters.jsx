import { useDispatch, useSelector } from 'react-redux';
import {
  Link, useNavigate, useParams, useSearchParams,
} from 'react-router-dom';

// import local
import { searchPetsitters } from '../../api/petsitters';
import { changeFieldDepartement, changeFieldPetType } from '../../store/reducers/petsitters';

import InputSelectDepartment from '../InputSelectDepartment/InputSelectDepartment';
import InputSelectTypePet from '../InputSelectTypePet/InputSelectTypePet';
import './SearchPetsitters.scss';

function SearchPetsitters() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataType = ['chien', 'chat', 'lapin', 'rongeur', 'oiseau', 'poisson', 'reptile', 'autre'];

  const { departement, petType } = useSelector((state) => state.petsitters);

  function handleChangeDepartement(value) {
    dispatch(changeFieldDepartement(value));
  }

  function handleChangePetType(value) {
    dispatch(changeFieldPetType(value));
  }

  // on submit, we make an API request to find the petsitters using the form
  // and navigate to the results page
  const handleSubmitSearch = (event) => {
    event.preventDefault();
    dispatch(searchPetsitters());
    navigate({
      pathname: '/resultats',
      search: `?departement=${departement}&pet_type=${petType}`,
    });
  };

  return (
    <section className="search-petsitters">
      <h3 className="search-petsitters__title">
        Rechercher un petsitter disponible
      </h3>
      <form className="search-petsitters__form" onSubmit={handleSubmitSearch}>
        <InputSelectDepartment
          onChange={handleChangeDepartement}
          value={departement}
        />

        <InputSelectTypePet
          className="search-petsitters__form__type"
          value={petType}
          onChange={handleChangePetType}
          petTypes={dataType}
        />

        {/* <Link to="/resultats?departement=48&animal=chien"> */}
        <div>
          <button type="submit" className="search-petsitters__form__btn__submit">
            Rechercher
          </button>
        </div>
        {/* </Link> */}
      </form>
    </section>

  );
}

export default SearchPetsitters;
