import { FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';

// import local
import Menu from './Menu/Menu';
import './Header.scss';

function Header({ isLogged }) {
  console.log('LOGGED >>', isLogged);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleClickMenuItem = () => {
    setShowMenu(false);
  };

  return (
    <div className="header">
      <div className="header__main">
        <h1 className="header__main__title">
          <Link to="/">PetSitterFriendly</Link>
        </h1>
        {isLogged
          ? (
            <FaUserCircle size="2rem" className="header__main__icon" onClick={handleClick} />
          )
          : (
            <div className="header__button">
              <button type="button" className="header__button--petsitter">Devenir Petsitter</button>
              <Link to="/identification">
                <button type="button" className="header__button--login">se connecter</button>
              </Link>
            </div>
          )}
      </div>
      { showMenu && <Menu handleClick={handleClickMenuItem} />}
    </div>
  );
}

export default Header;

Header.propTypes = {
  isLogged: bool.isRequired,
};
