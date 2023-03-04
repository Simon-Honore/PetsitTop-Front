import { MdAddComment, MdLibraryAdd, MdOutlineAdd } from 'react-icons/md';
import CounterResults from '../../components/CounterResults/CounterResults';
import myAdsData from '../../data/seed/ads-one-user.json';
import MyAdCard from './MyAdCard/MyAdCard';
import './MyAds.scss';

function MyAds() {
	
  return (
    <main className="myAds">
      <header className="myAds__header">
        <h2 className="myAds__header__title">Mes annonces</h2>
        {/* <button type="button" className="myAds__header__addBtn">
          <MdOutlineAdd size="1.1rem" />
          Ajouter une annonce
        </button> */}
        <div className="myAds__header__add">
          <MdLibraryAdd size="2.3rem" />
        </div>
      </header>

      <CounterResults
        arrayResult={myAdsData}
        searchType="annonce"
      />

      {myAdsData.map((ad) => (
        <MyAdCard
          key={ad.id}
          {...ad}
        />
      ))}
    </main>
  );
}

export default MyAds;
