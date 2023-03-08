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
  defaultChecked,
  petTypes,
}) {
  function handleChange(event) {
    onChange(event.target.checked, event.target.name);
  }
  console.log('petTypes >> ', petTypes);
  console.log('listPetTypes >> ', listPetTypes);

  function handleChangeArea(value, name) {
    onChange(value, name);
  }
  const isPetAccepted = (value) => {
    const a = petTypes.find((pet) => pet.id === value);
    return !!a;
  };

  const test = isPetAccepted(1);
  console.log('test >> ', test);

  return (
    <div className="roleForm conditionnal">
      <p className="roleForm__title">Je suis petsitter</p>
      <FormGroup className="roleForm__switch">
        <FormControlLabel control={<Switch onChange={handleChange} name="availability" defaultChecked={defaultChecked} />} label="Je suis disponible" />
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
      <fieldset className="roleForm__checkbox">
        <legend className="roleForm__checkbox__title">J&#39;accepte de garder : *</legend>

        <div className="roleForm__checkbox__list">
          {listPetTypes.map((petType) => (
            <FieldCheckboxPetType
              key={petType.value}
              value={petType.value}
              name={petType.name}
              defaultChecked={isPetAccepted(petType.value)}
            />
          ))}
        </div>

      </fieldset>
    </div>
  );
}

export default RoleForm;

RoleForm.propTypes = {
  availability: bool.isRequired,
  onChange: func.isRequired,
  availability_details: string.isRequired,
  defaultChecked: bool,
};

RoleForm.defaultProps = {
  defaultChecked: false,
};
