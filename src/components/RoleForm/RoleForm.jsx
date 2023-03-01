import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useState } from 'react';
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
        <div>
          <input type="checkbox" name="chien" id="chien" />
          <label htmlFor="chien">Chien</label>
        </div>

        <div>
          <input type="checkbox" name="chat" id="chat" />
          <label htmlFor="chat">Chat</label>
        </div>

        <div>
          <input type="checkbox" name="NAC" id="NAC" />
          <label htmlFor="NAC">NAC</label>
        </div>

        <div>
          <input type="checkbox" name="poisson" id="poisson" />
          <label htmlFor="poisson">Poisson</label>
        </div>

        <div>
          <input type="checkbox" name="reptile" id="reptile" />
          <label htmlFor="reptile">Reptile</label>
        </div>

        <div>
          <input type="checkbox" name="oiseau" id="oiseau" />
          <label htmlFor="oiseau">Oiseau</label>
        </div>
      </fieldset>
    </div>
  );
}

export default RoleForm;
