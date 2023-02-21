import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__nav__list">
          <li className="footer__nav__item">PetsitterFriendly</li>
          <li className="footer__nav__item">Se connecter</li>
          <li className="footer__nav__item">Devenir Petsitter</li>
        </ul>

        <ul className="footer__nav__list">
          <li className="footer__nav__item">Mentions légales</li>
          <li className="footer__nav__item">CGU</li>
          <li className="footer__nav__item">Equipe</li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
