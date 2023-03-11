import './ProfileAdCard.scss';

function ProfileAdCard({ title, content }) {
  return (
    <article className="profileAdCard">
            <h3 className="profileAdCard__title">{title}</h3>
          {/* <div className="adCard__description__header__info">
            <p className="adCard__description__header__info__date">
              Posté le :
              {' '}
              <span>
                {date.toLocaleDateString()}
              </span>
            </p>
          </div> */}
        <p className="profileAdCard__content">
          {content}
        </p>
    </article>
  );
}

export default ProfileAdCard;
