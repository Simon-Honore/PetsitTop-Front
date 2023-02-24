import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import local
import { searchPetsitters } from '../../api/petsitters';
import InputSelectDepartment from '../InputSelectDepartment/InputSelectDepartment';
import InputSelectTypePet from '../InputSelectTypePet/InputSelectTypePet';
import './SearchPetsitters.scss';

function SearchPetsitters() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // on submit, we make an API request to find the petsitters using the form
  // and navigate to the results page
  const handleSubmitSearch = (event) => {
    event.preventDefault();
    dispatch(searchPetsitters());
    navigate('/resultats');
  };
  return (
    <section className="search-petsitters">
      <h3 className="search-petsitters__title">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, obcaecati.
      </h3>

      <form className="search-petsitters__form" onSubmit={handleSubmitSearch}>
        <InputSelectDepartment />

        <InputSelectTypePet className="search-petsitters__form__type" />

        <button type="submit" className="search-petsitters__form__btn__submit">
          Rechercher
        </button>

      </form>
    </section>

  );
}

export default SearchPetsitters;
