import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { bool, func } from 'prop-types';

import listPetTypes from '../../data/list-pet-types.json';
import FieldCheckboxPetType from '../FieldCheckboxPetType/FieldCheckboxPetType';
import './RoleForm.scss';

function RoleForm({
  onChange,
  availability,
}) {
  // const [availability, setAvailability] = useState(false);
  // const switchAvailability = () => {
  //   setAvailability(!availability);
  //   console.log('switch works');
  // };

  function handleChange(event) {
    if (event.target.name === 'availability') {
      onChange(event.target.checked, event.target.name);
    } else {
      onChange(event.target.value, event.target.name);
    }
  }

  return (
    <div className="profile__settings__input conditionnal">
      <p>Je suis petsitter</p>
      <FormGroup>
        <FormControlLabel control={<Switch onChange={handleChange} name="availability" />} label="Je suis disponible" />
      </FormGroup>
      { availability
        && (
          <div>
            {/* // TODO - utiliser le composant fieldArea */}
            <label htmlFor="">Details de ma disponibilité</label>
            <textarea
              name="availability_details"
              id=""
              cols="30"
              rows="7"
              placeholder="# Jours et heures de dispo / Zone de mobilité ou uniquement à domicile"
              onChange={handleChange}
            />
          </div>
        )}
      <fieldset className="profile__settings__input">
        <legend className="profile__settings__input__checkbox">J&#39;accepte de garder : *</legend>

        {listPetTypes.map((petType) => (
          <FieldCheckboxPetType
            key={petType.value}
            value={petType.value}
            name={petType.name}
          />
        ))}

      </fieldset>
    </div>
  );
}

export default RoleForm;

RoleForm.propTypes = {
  availability: bool.isRequired,
  onChange: func.isRequired,
};
