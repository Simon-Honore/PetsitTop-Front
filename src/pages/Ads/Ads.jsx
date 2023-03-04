import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAds } from '../../api/ads';

import InputSelectDepartment from '../../components/InputSelectDepartment/InputSelectDepartment';
import AdsResults from './AdsResults/AdsResults';
import './Ads.scss';

function Ads() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllAds());
  }, []);

  const allAdsList = useSelector((state) => state.ads.allAdsList);

  const [filterByDepartment, setFilterByDepartment] = useState('');
  const [adsListFiltered, setAdsListFiltered] = useState();

  function handleChangeDepartment(value) {
    const filterAds = allAdsList.filter((ad) => ad.postal_code.slice(0, 2) === value);
    setFilterByDepartment(value);
    setAdsListFiltered(filterAds);
  }

  return (
    <main className="ads">
      <header className="ads__header">
        <h2 className="ads__header__title">Toutes les annonces</h2>
        <div className="ads__header__filter">
          <InputSelectDepartment
            onChange={handleChangeDepartment}
            value={filterByDepartment}
          />
        </div>
      </header>

      {filterByDepartment
        ? <AdsResults adsList={adsListFiltered} />
        : <AdsResults adsList={allAdsList} />}

    </main>
  );
}

export default Ads;
