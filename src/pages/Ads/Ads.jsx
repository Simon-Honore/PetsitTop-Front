import './Ads.scss';
import InputSelectDepartment from '../../components/InputSelectDepartment/InputSelectDepartment';
import adsData from '../../data/seed/ads.json';
import AdCard from './AdCard/AdCard';

function Ads() {
  const count = adsData.length;

  return (
    <main className="ads">
      <header className="ads__header">
        <h2 className="ads__header__title">Toutes les annonces</h2>
        {/* <form className="ads__header__filter">
          <p className="ads__header__filter__description">Votre département :</p>
          <InputSelectDepartment />
          <button type="submit" className="ads__header__filter__btn">FILTRER</button>
        </form> */}
        <div className="ads__header__filter">
          <InputSelectDepartment />
        </div>
        <p className="ads__header__count">
          {count > 1
            ? `${count} annonces diponibles`
            : `${count} annonce diponible` }
        </p>
      </header>
      {adsData.map((ad) => (
        <AdCard
          key={ad.id}
          {...ad}
        />
      ))}

    </main>
  );
}

export default Ads;
