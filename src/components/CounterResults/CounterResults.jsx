import './CounterResults.scss';
import { string, arrayOf, shape } from 'prop-types';

function CounterResults({ arrayResult, searchType }) {
  const count = arrayResult.length;
  return (
    <p className="myAds__count">
      {count > 1
        ? `${count} ${searchType}s diponibles`
        : `${count} ${searchType} diponible` }
    </p>
  );
}

export default CounterResults;

CounterResults.propTypes = {
  searchType: string.isRequired,
  arrayResult: arrayOf(
    shape().isRequired,
  ).isRequired,
};
