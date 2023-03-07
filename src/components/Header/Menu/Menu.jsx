import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// import local
import { logout } from '../../../store/reducers/user';

import './Menu.scss';
import { resetResearchPetsitters } from '../../../store/reducers/petsitters';

function Menu({ handleClick }) {
  const classNameLink = ({ isActive }) => cn('nav__link', { 'nav__link--active': isActive });

  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
    dispatch(resetResearchPetsitters());
  };

  return (
    <nav className="nav" onClick={handleClick}>
      <NavLink to="/mon_profil" className={classNameLink}>Mon profil</NavLink>
      <NavLink to="/creer-une-annonce" className={classNameLink}>Créer une annonce</NavLink>
      <NavLink to="/mes-annonces" className={classNameLink}>Mes annonces</NavLink>
      <NavLink to="/annonces" className={classNameLink}>Voir toutes les annonces</NavLink>
      <NavLink to="/" className={classNameLink} onClick={handleLogout}>Se déconnecter</NavLink>
    </nav>
  );
}

export default Menu;

Menu.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
