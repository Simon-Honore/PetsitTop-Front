import { arrayOf, shape } from 'prop-types';
import AdCard from '../../../components/AdCard/AdCard';
import CounterResults from '../../../components/CounterResults/CounterResults';

import '../../../components/AdCard/AdCard.scss';

function AdsResults({ adsList }) {
  return (
    <>
      <CounterResults
        arrayResult={adsList}
        searchType="annonce"
      />
      {adsList.map((ad) => (
        <AdCard
          key={ad.id}
          {...ad}
        />
      ))}
    </>
  );
}

export default AdsResults;

AdsResults.propTypes = {
  adsList: arrayOf(
    shape().isRequired,
  ).isRequired,
};
