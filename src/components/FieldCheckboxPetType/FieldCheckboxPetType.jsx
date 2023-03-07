import { string, func, bool } from 'prop-types';
import cn from 'classnames';
import './FieldCheckboxPetType.scss';
import { useDispatch } from 'react-redux';
import { addPetType } from '../../store/reducers/createAccount';

// == Composant
function FieldCheckboxPetType({
  name,
  value,
  // onChange,
}) {
  const dispatch = useDispatch();

  const inputId = `field-${name}`;

  function handleChange(event) {
    const { value, checked } = event.target;
    console.log('value, checked  >> ', value, checked);
    if (checked) {
      dispatch(addPetType(value));
    }
    // if (event.target.checked) {
    //   onChange(event.target.value, name);
    // }
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
  value: bool,
  name: string.isRequired,
  // onChange: func.isRequired,
};

FieldCheckboxPetType.defaultProps = {
  value: false,
};

export default FieldCheckboxPetType;
