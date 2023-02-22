import './Header.scss';
import { FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';

function Header({ isLogged }) {
  console.log('LOGGED >>', isLogged);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
    console.log(`after click ${showMenu}`);
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
              <button type="button" className="header__button--login">se connecter</button>
            </div>
          )}
      </div>
      { showMenu && <Menu />}
    </div>
  );
}

export default Header;
