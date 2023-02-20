import './Header.scss';
import { FaUserCircle } from 'react-icons/fa';
import Menu from '../Menu/Menu';

function Header({ isLogged }) {
  console.log('LOGGED >>', isLogged);
  return (
    <div className="header">
      <div className="header__main">
        <h1 className="header__main__title">PetSitterFriendly</h1>
        {isLogged
          ? (
            <FaUserCircle className="header__main__icon" />
            // TODO voir viewbox
          )
          : (
            <div className="header__button">
              <button type="button" className="header__button--petsitter">Devenir Petsitter</button>
              <button type="button" className="header__button--login">se connecter</button>
            </div>
          )}
      </div>
      { isLogged && <Menu />}
    </div>
  );
}

export default Header;
