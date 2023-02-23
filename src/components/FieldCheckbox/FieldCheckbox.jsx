import { string } from 'prop-types';
import cn from 'classnames';
import './FieldCheckbox.scss';

// == Composant
function FieldCheckbox({
  label,
  name,
  value,
}) {
  const inputId = `field-${name}`;

  return (
    <div className={cn('field-checkbox', { 'field-checkbox--has-content': value.length > 0 })}>
      <input
        value={value}
        id={inputId}
        type="checkbox"
        className="field-checkbox__input"
        name={name}
      />

      <label
        htmlFor={inputId}
        className="field-checkbox__label"
      >
        {label}
      </label>
    </div>
  );
}

FieldCheckbox.propTypes = {
  label: string.isRequired,
  value: string,
  name: string.isRequired,
};

FieldCheckbox.defaultProps = {
  value: '',
};

export default FieldCheckbox;
