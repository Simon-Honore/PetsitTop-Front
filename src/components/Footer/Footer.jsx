import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  const isLogged = localStorage.getItem('userId');
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__nav__list">
          <Link to="/" className="footer__nav__item">PetsitterFriendly</Link>
          {!isLogged && <Link to="/identification" className="footer__nav__item">Se connecter</Link>}
          {!isLogged && <Link to="/identification" className="footer__nav__item">Devenir Petsitter</Link>}
        </ul>

        <ul className="footer__nav__list">
          <Link to="/mentions-legales" className="footer__nav__item">Mentions légales</Link>
          <Link to="/cgu" className="footer__nav__item">CGU</Link>
          <Link to="/equipe" className="footer__nav__item">Equipe</Link>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
