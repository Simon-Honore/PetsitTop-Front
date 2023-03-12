import { FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';

// import local
import Menu from './Menu/Menu';
import './Header.scss';

function Header({ isLogged }) {
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
          <Link to="/"><img src="/logo-petsittop-white.svg" width="150" alt="PetsitTop" /></Link>
        </h1>
        {isLogged
          ? (
            <div className="header__logged">
              <Link to="/annonces">
                <button type="button" className="header__logged--btn">Voir toutes les annonces</button>
              </Link>
              <FaUserCircle size="2.3rem" className="header__main__icon" onClick={handleClick} />
            </div>
          )
          : (
            <div className="header__button">
              <Link to="/identification">
                <button type="button" className="header__button--petsitter">Devenir Petsitter</button>
              </Link>

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
