import { string, number } from 'prop-types';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

import { addPetType, removePetType } from '../../store/reducers/createAccount';
import './FieldCheckboxPetType.scss';

// == Composant
function FieldCheckboxPetType({
  name,
  value,
}) {
  const dispatch = useDispatch();

  const inputId = `field-${name}`;

  function handleChange(event) {
    const { value, checked } = event.target;
    if (checked) {
      dispatch(addPetType(value));
    }
    if (!checked) {
      dispatch(removePetType(value));
    }
  }

  return (
    <div className={cn('field-checkbox', { 'field-checkbox--has-content': value.length > 0 })}>
      <input
        value={value}
        id={inputId}
        type="checkbox"
        className="field-checkbox__input"
        name={name}
        onChange={handleChange}
      />

      <label
        htmlFor={inputId}
        className="field-checkbox__label"
      >
        {name}
      </label>
    </div>
  );
}

FieldCheckboxPetType.propTypes = {
  value: number.isRequired,
  name: string.isRequired,
};

export default FieldCheckboxPetType;
