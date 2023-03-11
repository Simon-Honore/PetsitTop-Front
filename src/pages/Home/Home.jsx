import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ChoiceSeparator from '../../components/ChoiceSeparator/ChoiceSeparator';

// import local
import SearchPetsitters from '../../components/SearchPetsitters/SearchPetsitters';
import BecomePetsitter from './BecomePetsitter/BecomePetsitter';
import './Home.scss';

function Home() {
  const isLogged = useSelector((state) => state.user.logged);

  return (
    <main className="home">
      <div className="home__description">
        <div className="home__description__container">
          <p>
            Votre solution de petsitting est à portée de clic !
            <br />
            <span>Misez sur l'entraide, prenez contact avec d'autres amoureux des animaux et trouvez le Petsitter idéal pour votre animal, près de chez vous.</span>
          </p>
        </div>
      </div>
      <SearchPetsitters />

      <div className="home__separator">
        <ChoiceSeparator />
      </div>

      <button type="button" className="home__btn">
        <Link
          to={isLogged ? '/creer-une-annonce' : '/identification'}
        >
          Créer une annonce
        </Link>
      </button>

      <BecomePetsitter isLogged={isLogged} />
    </main>
  );
}

export default Home;
