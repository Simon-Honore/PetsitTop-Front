import { MdDeleteForever, MdEditNote, MdPlace } from 'react-icons/md';
import { string, number } from 'prop-types';
import { useState } from 'react';

import './MyAdCard.scss';
import { useDispatch } from 'react-redux';
import { deleteOneAd } from '../../../api/ads';
import FormAd from '../../../components/FormAd/FormAd';

function MyAdCard({
  id,
  title,
  content,
  city,
  postal_code,
  created_at,
}) {
  const dispatch = useDispatch();

  const [cardUpdateInProgress, setCardUpdateInProgress] = useState(false);

  const date = new Date(created_at);

  function handleClickDeleteAd() {
    dispatch(deleteOneAd(id));
  }

  function handleClickUpdateAd() {
    setCardUpdateInProgress(true);
  }

  function handleSubmitFormUpdateAd() {
    console.log('submit update form');
    setCardUpdateInProgress(false);
  }

  return (
    <article className="myAdCard">
      {cardUpdateInProgress
        ? (
          <FormAd
            title={title}
            content={content}
            city={city}
            postal_code={postal_code}
            btnContent="Modifier mon annonce"
            onSubmit={handleSubmitFormUpdateAd}
          />
        )
        : (
          <>
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
                <MdEditNote size="2.3rem" onClick={handleClickUpdateAd} />
                <MdDeleteForever size="2.4rem" onClick={handleClickDeleteAd} />
              </section>
            </header>

            <p className="myAdCard__content">
              {content}
            </p>
          </>
        )}

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
