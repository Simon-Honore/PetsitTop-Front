import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './Menu.scss';

function Menu() {
  const classNameLink = ({ isActive }) => cn('nav__link', { 'nav__link--active': isActive });

  return (
    <nav className="nav">
      <NavLink to="/mon_profil" className={classNameLink}>Mon profil</NavLink>
      <NavLink to="/#" className={classNameLink}>Créer une annonce</NavLink>
      <NavLink to="/#" className={classNameLink}>Mes annonces</NavLink>
      <NavLink to="/#" className={classNameLink}>Voir toutes les annonces</NavLink>
    </nav>
  );
}

export default Menu;
