import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { TbFilterOff } from 'react-icons/tb';

import { fetchAllAds } from '../../api/ads';
import InputSelectDepartment from '../../components/InputSelectDepartment/InputSelectDepartment';
import AdsResults from './AdsResults/AdsResults';
import './Ads.scss';

function Ads() {
  const dispatch = useDispatch();

  // to fetch all existing ads at page load with api call
  useEffect(() => {
    dispatch(fetchAllAds());
  }, []);

  // to fetch results of api call
  const allAdsList = useSelector((state) => state.ads.allAdsList);

  // filter of department on search url
  const [searchParams, SetSearchParams] = useSearchParams();
  const filterDepartement = searchParams.get('departement');

  // results after the filter
  const [adsListFiltered, setAdsListFiltered] = useState();

  // to realize the filter by department
  useEffect(() => {
    if (filterDepartement) {
      const filterAds = allAdsList.filter((ad) => ad.postal_code.slice(0, 2) === filterDepartement);
      setAdsListFiltered(filterAds);
    }
  }, [allAdsList, filterDepartement]);

  function handleChangeDepartment(value) {
    SetSearchParams({ departement: value });
  }

  function handleClickResetFilter() {
    searchParams.delete('departement');
    SetSearchParams(searchParams);
  }

  return (
    <main className="ads">
      <header className="ads__header">
        <h2 className="ads__header__title">Toutes les annonces</h2>
        <div className="ads__header__filter">
          <InputSelectDepartment
            onChange={handleChangeDepartment}
            value={filterDepartement || ''}
          />
          <TbFilterOff size="2rem" onClick={handleClickResetFilter} className="ads__header__filter__reset" />
        </div>
      </header>

      {filterDepartement && adsListFiltered
        ? <AdsResults adsList={adsListFiltered} />
        : <AdsResults adsList={allAdsList} />}

    </main>
  );
}

export default Ads;
