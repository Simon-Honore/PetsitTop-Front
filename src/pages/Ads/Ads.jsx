import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAds } from '../../api/ads';

import InputSelectDepartment from '../../components/InputSelectDepartment/InputSelectDepartment';
import adsData from '../../data/seed/ads.json';
import AdCard from './AdCard/AdCard';
import './Ads.scss';

function Ads() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllAds());
  }, []);

  const allAdsList = useSelector((state) => state.ads.allAdsList);

  const count = allAdsList.length;

  const [filterByDepartment, setFilterByDepartment] = useState();

  function handleChangeDepartment(value) {
    setFilterByDepartment(value);
  }

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
          <InputSelectDepartment
            onChange={handleChangeDepartment}
            value={filterByDepartment}
          />
        </div>
      </header>

      <p className="ads__count">
        {count > 1
          ? `${count} annonces diponibles`
          : `${count} annonce diponible` }
      </p>
      {allAdsList.map((ad) => (
        <AdCard
          key={ad.id}
          {...ad}
        />
      ))}

    </main>
  );
}

export default Ads;
