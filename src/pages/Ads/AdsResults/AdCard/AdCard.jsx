import { MdPlace } from 'react-icons/md';
import {
  string, number, arrayOf, shape,
} from 'prop-types';

import './AdCard.scss';

function AdCard({
  id,
  title,
  content,
  city,
  postal_code,
  created_at,
  user,
}) {
  const date = new Date(created_at);

  const name = `${user[0].first_name} ${user[0].last_name.slice(0, 1)}.`;

  return (
    <article className="adCard">
      <section className="adCard__description">
        <header className="adCard__description__header">
          <h3 className="adCard__description__header__title">{title}</h3>
          <p className="adCard__description__header__name">{name}</p>
          <div className="adCard__description__header__info">
            <p className="adCard__description__header__info__localisation">
              <MdPlace size="1.5rem" />
              {`${city} - ${postal_code}`}
            </p>
            <p className="adCard__description__header__info__date">
              Posté le :
              {' '}
              <span>
                {date.toLocaleDateString()}
              </span>
            </p>
          </div>
        </header>

        <p className="adCard__description__content">
          {content}
        </p>
      </section>

      <section className="adCard__btnContainer">
        <button
          type="button"
          className="adCard__btnContainer__btn"
        >
          Voir le profil
        </button>

        <button
          type="button"
          className="adCard__btnContainer__btn adCard__btnContainer__btn--contact"
        >
          Contacter
        </button>
      </section>
    </article>
  );
}

export default AdCard;

AdCard.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  content: string.isRequired,
  city: string.isRequired,
  postal_code: string.isRequired,
  created_at: string.isRequired,
  user: arrayOf(
    shape({
      first_name: string.isRequired,
      last_name: string.isRequired,
    }).isRequired,
  ).isRequired,
};
