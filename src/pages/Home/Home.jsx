import { Link } from 'react-router-dom';
import ChoiceSeparator from '../../components/ChoiceSeparator/ChoiceSeparator';

// import local
import SearchPetsitters from '../../components/SearchPetsitters/SearchPetsitters';
import BecomePetsitter from './BecomePetsitter/BecomePetsitter';
import './Home.scss';

function Home() {
  return (
    <main className="home">
      <p className="home__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Inventore autem quisa , natus velit quod optio iure dicta architecto expedita
      </p>

      <SearchPetsitters />

      <div className="home__separator">
        <ChoiceSeparator />
      </div>

      <button type="button" className="home__btn">
        <Link
          to="/#"
        >
          Créer une annonce
        </Link>
      </button>

      <BecomePetsitter />
    </main>
  );
}

export default Home;
