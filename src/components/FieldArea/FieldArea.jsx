import { string, func } from 'prop-types';
import cn from 'classnames';

import './FieldArea.scss';

function FieldArea({
  label,
  placeholder,
  name,
  value,
  onChange,
  form,
  limit,
}) {
  function handleChange(event) {
    onChange(event.target.value, name);
  }

  const inputId = `field-${form}-${name}`;

  const count = value.length;

  const classNameCount = cn('fieldArea__count', { 'fieldArea__count--warning': count > (limit * 0.9) });

  return (
    <div className={cn('fieldArea', { 'field--has-content': value.length > 0 })}>
      <label
        htmlFor={inputId}
        className="fieldArea__label"
      >
        {label}
      </label>

      <textarea
        id={inputId}
        className="fieldArea__input"
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        maxLength={limit}
        value={value}
      />

      <p className={classNameCount}>
        <span>{count}</span>
        {` / ${limit}`}
      </p>
    </div>
  );
}

FieldArea.propTypes = {
  label: string.isRequired,
  value: string,
  name: string.isRequired,
  placeholder: string.isRequired,
  onChange: func.isRequired,
  form: string.isRequired,
  limit: string.isRequired,
};

FieldArea.defaultProps = {
  value: '',
};

export default FieldArea;
