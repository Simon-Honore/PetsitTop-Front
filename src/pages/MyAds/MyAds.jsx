import { useEffect } from 'react';
import { MdLibraryAdd } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMyAds } from '../../api/ads';
import CounterResults from '../../components/CounterResults/CounterResults';
import MyAdCard from './MyAdCard/MyAdCard';
import './MyAds.scss';

function MyAds() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myAdsData = useSelector((state) => state.user.ads);

  useEffect(() => {
    dispatch(getMyAds());
  }, []);

  function handleClickAddAd() {
    navigate('/creer-une-annonce');
  }

  return (
    <main className="myAds">
      <header className="myAds__header">
        <h2 className="myAds__header__title">Mes annonces</h2>
        <div className="myAds__header__add--mobile">
          <MdLibraryAdd size="2.3rem" onClick={handleClickAddAd} />
        </div>

        <div className="myAds__header__add--desktop">
          <button
            type="button"
            className="myAds__header__add--desktop__btn"
            onClick={handleClickAddAd}
          >
            <MdLibraryAdd size="1.8rem" />
            <p>Ajouter une annonce</p>
          </button>
        </div>
      </header>

      {myAdsData[0]
        ? (
          <>
            <CounterResults
              arrayResult={myAdsData}
              searchType="annonce"
            />

            {myAdsData.map((ad) => (
              <MyAdCard
                key={ad.id}
                adCardTitle={ad.title}
                adCardContent={ad.content}
                adCardCity={ad.city}
                adCardPostalCode={ad.postal_code}
                adCardCreatedAt={ad.created_at}
                adCardId={ad.id}
              />
            ))}
          </>
        )
        : (
          <div className="myAds__notFound">
            <p>
              Vous n&#39;avez pas encore d&#39;annonce.
            </p>

            <br />

            <p>
              Vous pouvez en ajouter en cliquant sur le bouton
              <span><MdLibraryAdd size="2rem" /></span>
              en haut à droite
            </p>
          </div>
        )}
    </main>
  );
}

export default MyAds;
