import AdCard from './AdCard/AdCard';
import './AdsResults.scss';

function AdsResults({ adsList }) {
  return (
    <>
      <p className="adsResults__count">
        {adsList.length > 1
          ? `${adsList.length} annonces diponibles`
          : `${adsList.length} annonce diponible` }
      </p>
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
