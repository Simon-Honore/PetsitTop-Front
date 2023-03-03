import { MdDeleteForever, MdEditNote, MdPlace } from 'react-icons/md';
import { string, number } from 'prop-types';

import './MyAdCard.scss';

function MyAdCard({
  id,
  title,
  content,
  city,
  postal_code,
  created_at,
}) {
  const date = new Date(created_at);

  return (
    <article className="myAdCard">
      <header className="myAdCard__header">
        <section className="myAdCard__header__description">
          <h3 className="myAdCard__header__description__title">{title}</h3>
          <p className="myAdCard__header__description__localisation">
            <MdPlace size="1.5rem" />
            {`${city} - ${postal_code}`}
          </p>
          <p className="myAdCard__header__description__date">
            Posté le :
            {' '}
            <span>
              {date.toLocaleDateString()}
            </span>
          </p>
        </section>

        <section className="myAdCard__header__btns">
          <MdEditNote size="2.3rem" />
          <MdDeleteForever size="2.4rem" />
        </section>
      </header>

      <p className="myAdCard__content">
        {content}
      </p>
    </article>
  );
}

export default MyAdCard;

MyAdCard.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  content: string.isRequired,
  city: string.isRequired,
  postal_code: string.isRequired,
  created_at: string.isRequired,
};