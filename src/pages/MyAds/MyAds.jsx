import { useEffect } from 'react';
import { MdAddComment, MdLibraryAdd, MdOutlineAdd } from 'react-icons/md';
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
  }, [myAdsData]);

  function handleClickAddAd() {
    navigate('/creer-une-annonce');
  }

  return (
    <main className="myAds">
      <header className="myAds__header">
        <h2 className="myAds__header__title">Mes annonces</h2>
        {/* <button type="button" className="myAds__header__addBtn">
          <MdOutlineAdd size="1.1rem" />
          Ajouter une annonce
        </button> */}
        <div className="myAds__header__add">
          <MdLibraryAdd size="2.3rem" onClick={handleClickAddAd} />
        </div>
      </header>

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
    </main>
  );
}

export default MyAds;
