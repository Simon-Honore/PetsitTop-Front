import './Header.scss';

function Header({ isLogged }) {
	console.log('LOGGED >>', isLogged);
  return (
    <div className="header">
      <h1 className="header__title">PetSitterFriendly</h1>
      {isLogged
        ? <div />
        : (
          <div className="header__button">
            <button type="button" className="header__button--petsitter">Devenir Petsitter</button>
            <button type="button" className="header__button--login">se connecter</button>
          </div>
        )}
    </div>
  );
}

export default Header;
