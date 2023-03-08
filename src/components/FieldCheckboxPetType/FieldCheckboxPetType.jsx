import { string, number, bool } from 'prop-types';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

import { addPetType, removePetType } from '../../store/reducers/createAccount';
import './FieldCheckboxPetType.scss';

// == Composant
function FieldCheckboxPetType({
  name,
  value,
  defaultChecked,
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
    <div className={cn('fieldCheckboxPetType', { 'fieldCheckboxPetType--has-content': value.length > 0 })}>
      <input
        value={value}
        id={inputId}
        type="checkbox"
        className="fieldCheckboxPetType__input"
        name={name}
        onChange={handleChange}
        defaultChecked={defaultChecked}
      />

      <label
        htmlFor={inputId}
        className="fieldCheckboxPetType__label"
      >
        {name}
      </label>
    </div>
  );
}

FieldCheckboxPetType.propTypes = {
  value: number.isRequired,
  name: string.isRequired,
  defaultChecked: bool,

};

FieldCheckboxPetType.defaultProps = {
  defaultChecked: false,
};

export default FieldCheckboxPetType;
