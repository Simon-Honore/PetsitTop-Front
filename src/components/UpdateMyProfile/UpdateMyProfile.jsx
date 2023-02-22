import './UpdateMyProfile.scss';

function UpdateMyProfile() {
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
            <input type="checkbox" name="petSitter" id="petSitter" />
            <label htmlFor="petSitter">
              Petsitter : je souhaite garder des animaux
            </label>
          </div>

        </fieldset>

        <div className="profile__settings__input">
          <input type="submit" value="Enregistrer" />
        </div>
      </form>
    </div>

  );
}

export default UpdateMyProfile;
