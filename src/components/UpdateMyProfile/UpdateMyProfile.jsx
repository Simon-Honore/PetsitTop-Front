import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useState } from 'react';
import './UpdateMyProfile.scss';

function UpdateMyProfile() {
  const [isPetsitter, setIsPetsitter] = useState(false);
  const [availability, setAvailability] = useState(false);

  const handleChange = () => {
    setIsPetsitter(!isPetsitter);
    console.log(`box is check : ${isPetsitter}`);
  };

  const switchAvailability = () => {
    setAvailability(!availability);
    console.log('switch works');
  };

  return (
    <div className="profile">
      <form className="profile__settings">
        <h1 className="profile__settings__title">Mon profil</h1>

        <div className="profile__settings__input">
          <label htmlFor="first_name">Prénom : *</label>
          <input type="text" name="first_name" id="first_name" />
        </div>

        <div className="profile__settings__input">
          <label htmlFor="last_name">Nom * :</label>
          <input type="text" name="last_name" id="last_name" />
        </div>

        <div className="profile__settings__input">
          <label htmlFor="email">Adresse email : *</label>
          <input type="email" name="email" id="email" />
        </div>

        <div className="profile__settings__input">
          <label htmlFor="postal_code">Code postal : *</label>
          <input type="text" name="postal_code" id="postal_code" />
        </div>

        <div className="profile__settings__input">
          <label htmlFor="city">Ville : *</label>
          <input type="text" name="city" id="city" />
        </div>

        <div className="profile__settings__input">
          <label htmlFor="presentation">Résumé : </label>
          <textarea type="" name="presentation" id="presentation" rows="5" placeholder="# Présentez vous en quelques mots" />
        </div>

        <fieldset className="profile__settings__input">
          <legend>Type(s) de profil(s)</legend>
          <div className="profile__settings__input__checkbox">
            <input type="checkbox" name="petOwner" id="petOwner" />
            <label htmlFor="petOwner">
              Petowner : J&#39;ai des animaux à faire garder
            </label>
          </div>
          <p>et / ou</p>
          <div className="profile__settings__input__checkbox">
            <input
              type="checkbox"
              name="petSitter"
              id="petSitter"
              onChange={handleChange}
            />
            <label htmlFor="petSitter">
              Petsitter : je souhaite garder des animaux
            </label>
          </div>

          {isPetsitter
            ? (
              <div className="profile__settings__input conditionnal">
                <p>Je suis petsitter</p>
                <FormGroup>
                  <FormControlLabel control={<Switch onChange={switchAvailability} />} label="Je suis disponible" />
                </FormGroup>
                { availability
                ? (
                  <div>
                    <label htmlFor="">Details de ma disponibilité</label>
                    <textarea name="" id="" cols="30" rows="7" placeholder='# Jours et heures de dispo / Zone de mobilité ou uniquement à domicile'></textarea>
                  </div>
                ):''}
                <div className="profile__settings__input">
                  <p>J'accepte de garder : *</p>
                  <div className="profile__settings__input__checkbox">
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
                  </div>
                  <div className="profile__settings__input__checkbox">
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
                  </div>
                </div>
              </div>
            ) : ''}

        </fieldset>

        <div className="profile__settings__input">
          <input type="submit" value="Enregistrer" />
        </div>
      </form>
    </div>

  );
}

export default UpdateMyProfile;
