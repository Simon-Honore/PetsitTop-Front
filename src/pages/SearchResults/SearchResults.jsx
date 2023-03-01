import { useSelector } from 'react-redux';
import SearchPetsitters from '../../components/SearchPetsitters/SearchPetsitters';
import PetsitterCard from './PetsitterCard/PetsitterCard';
import './SearchResults.scss';

function SearchResults() {
  const searchData = useSelector((state) => state.petsitters.results);

  return (
    <main className="main-home">
      {/* searchbar */}
      <SearchPetsitters />

      {/* génère une carte pour chaque petsitter trouvé */}
      {searchData.map((petsitter) => (
        <PetsitterCard
          key={petsitter.id}
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
