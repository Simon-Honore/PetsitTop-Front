import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { changeFieldDepartement, changeFieldPetType } from '../../store/reducers/petsitters';
import { searchPetsitters } from '../../api/petsitters';
import SearchPetsitters from '../../components/SearchPetsitters/SearchPetsitters';
import PetsitterCard from './PetsitterCard/PetsitterCard';
import './SearchResults.scss';

function SearchResults() {
  const dispatch = useDispatch();
  const [searchParams, SetSearchParams] = useSearchParams();

  const departement = searchParams.get('departement');
  const pet_type = searchParams.get('pet_type');

  useEffect(() => {
    dispatch(changeFieldDepartement(departement));
    dispatch(changeFieldPetType(pet_type));
    dispatch(searchPetsitters());
  }, [departement, pet_type]);

  const searchData = useSelector((state) => state.petsitters.results);

  return (
    <main className="main-home">
      {/* searchbar */}
      <SearchPetsitters />

      <h1 className="search-petsitters__results">
        {searchData.length > 1 ? `${searchData.length} petsitters trouvés.` : `${searchData.length} petsitter trouvé.`}
      </h1>
      {/* génère une carte pour chaque petsitter trouvé */}
      {searchData.map((petsitter) => (
        <PetsitterCard
          key={petsitter.id}
          id={petsitter.id}
          prenom={petsitter.first_name}
          nom={petsitter.last_name}
          ville={petsitter.city}
          codePostal={petsitter.postal_code}
          description={petsitter.presentation}
          animauxAcceptes={petsitter.pet_types}
        />
      ))}

    </main>
  );
}

export default SearchResults;
