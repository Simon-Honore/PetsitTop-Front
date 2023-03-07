import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { bool, func, string } from 'prop-types';

import listPetTypes from '../../data/list-pet-types.json';
import FieldArea from '../FieldArea/FieldArea';
import FieldCheckboxPetType from '../FieldCheckboxPetType/FieldCheckboxPetType';
import './RoleForm.scss';

function RoleForm({
  onChange,
  availability,
  availability_details,
}) {
  function handleChange(event) {
    onChange(event.target.checked, event.target.name);
  }

  function handleChangeArea(value, name) {
    onChange(value, name);
  }

  return (
    <div className="profile__settings__input conditionnal">
      <p>Je suis petsitter</p>
      <FormGroup>
        <FormControlLabel control={<Switch onChange={handleChange} name="availability" />} label="Je suis disponible" />
      </FormGroup>
      { availability
        && (
          <FieldArea
            label="Détails de ma disponibilité*"
            name="availability_details"
            placeholder="# Jours et heures de dispo
							#Zone de mobilité ou uniquement à domicile"
            onChange={handleChangeArea}
            form="createAccount"
            value={availability_details}
            limit="200"
          />
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
  availability_details: string.isRequired,
};
