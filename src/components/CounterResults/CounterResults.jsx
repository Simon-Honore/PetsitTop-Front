import './CounterResults.scss';
import { string, arrayOf, shape } from 'prop-types';

function CounterResults({ arrayResult, searchType }) {
  const count = arrayResult.length;
  return (
    <h3 className="counterResults">
      {count > 1
        ? `${count} ${searchType}s diponibles`
        : `${count} ${searchType} diponible` }
    </h3>
  );
}

export default CounterResults;

CounterResults.propTypes = {
  searchType: string.isRequired,
  arrayResult: arrayOf(
    shape().isRequired,
  ).isRequired,
};
