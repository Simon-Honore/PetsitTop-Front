import InputSelectDepartment from '../../components/InputSelectDepartment/InputSelectDepartment';
import InputSelectTypePet from '../../components/InputSelectTypePet/InputSelectTypePet';
import PetsitterCard from './PetsitterCard/PetsitterCard';
import './SearchResults.scss';

const petSitters = [
  {
    id: 1,
    nom: 'Dai',
    prenom: 'Ines',
    code_postal: 59700,
    ville: 'Marcq-en-Baroeul',
    description: 'bonjour, je suis disponible pour garder vos chats en votre absence, je peux me déplacer si couverture des frais de déplacement',
    animaux_acceptes: ['chat', 'chien', 'NAC', 'reptile', 'oiseau', 'poisson'],
  },
  {
    id: 2,
    nom: 'Honoré',
    prenom: 'Simon',
    code_postal: 85300,
    ville: 'Challans',
    description: 'bonjour, je suis disponible pour garder votre chien pendant les vacances car mon chien aime avoir un copain à la maison',
    animaux_acceptes: ['chien', 'NAC', 'reptile', 'oiseau', 'poisson']
  },
];

function SearchResults() {
  return (
    <main className="main-home">
      <section className="search-petsitters">
        <h3 className="search-petsitters__title">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, obcaecati.
        </h3>

        <form className="search-petsitters__form">
          <InputSelectDepartment />

          <InputSelectTypePet className="search-petsitters__form__type" />

          <button type="submit" className="search-petsitters__form__btn__submit">Rechercher</button>

        </form>
      </section>

      {petSitters.map((petsitter) => (
        <PetsitterCard
          key={petsitter.id}
          prenom={petsitter.prenom}
          nom={petsitter.nom}
          ville={petsitter.ville}
          codePostal={petsitter.code_postal}
          description={petsitter.description}
          animauxAcceptes={petsitter.animaux_acceptes}
        />
      ))}

    </main>
  );
}

export default SearchResults;
