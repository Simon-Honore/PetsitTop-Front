import './Menu.scss';

function Menu() {
  return (
    <nav className="nav">
      <ul className="nav__link">
        <li className="nav__link__item">Mon profil</li>
        <li className="nav__link__item">Créer une annonce</li>
        <li className="nav__link__item">Mes annonces</li>
        <li className="nav__link__item">Voir toutes les annonces</li>
      </ul>
    </nav>
  );
}

export default Menu;
