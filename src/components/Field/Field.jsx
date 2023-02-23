import { string } from 'prop-types';
import cn from 'classnames';
import './Field.scss';

// == Composant
function Field({
  label,
  placeholder,
  type,
  name,
  value,
}) {
  const inputId = `field-${name}`;

  return (
    <div className={cn('field', { 'field--has-content': value.length > 0 })}>
      <label
        htmlFor={inputId}
        className="field__label"
      >
        {label}
      </label>

      <input
        value={value}
        id={inputId}
        type={type}
        className="field__input"
        placeholder={placeholder}
        name={name}
      />

    </div>
  );
}

Field.propTypes = {
  label: string.isRequired,
  value: string,
  type: string,
  name: string.isRequired,
  placeholder: string.isRequired,
};

Field.defaultProps = {
  value: '',
  type: 'text',
};

export default Field;
