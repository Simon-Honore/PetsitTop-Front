import { useState } from 'react';
import Field from '../../../components/Field/Field';
import FieldCheckbox from '../../../components/FieldCheckbox/FieldCheckbox';
import './FormCreateAccount.scss';

function FormCreateAccount() {
  const [continueCreating, setContinueCreating] = useState(false);

  const handleClickContinue = () => {
    setContinueCreating(true);
  };

  return (
    <section className="createAccount">
      <h3 className="createAccount__title">
        Je créer mon compte
      </h3>

      <form className="createAccount__form">
        <Field
          label="Adresse email*"
          type="email"
          name="createAccount-email"
          placeholder="email"
        />

        {/* on click, see the rest of the form  */}
        {!continueCreating
          ? (
            <button
              type="button"
              className="createAccount__btn createAccount__btn--continue"
              onClick={handleClickContinue}
            >
              CONTINUER
            </button>
          )
          : (
            <div>
              <Field
                label="Mot de passe*"
                type="password"
                name="createAccount-password"
                placeholder="mot de passe"
              />

              <Field
                label="Confirmation mot de passe*"
                type="password"
                name="createAccount-password-confirm"
                placeholder="mot de passe"
              />

              <Field
                label="Prénom*"
                name="createAccount-firstName"
                placeholder="prénom"
              />

              <Field
                label="Nom*"
                name="createAccount-lastName"
                placeholder="nom"
              />

              <Field
                label="Code postal*"
                name="createAccount-zipCode"
                placeholder="code postal"
              />

              <Field
                label="Ville*"
                name="createAccount-city"
                placeholder="ville"
              />

              <fieldset className="createAccount__fieldset">
                <legend className="createAccount__fieldset__legend">Type(s) de profil(s)*</legend>
                <FieldCheckbox
                  label="Petowner : J'ai des animaux à faire garder"
                  name="createAccount-role--petowner"
                />

                <p className="createAccount__fieldset__separator">et / ou</p>

                <FieldCheckbox
                  label="Petsitter : je souhaite garder des animaux"
                  name="createAccount-role--petsitter"
                />
              </fieldset>

              <div className="createAccount__policy">
                <FieldCheckbox
                  label="mentions RGPD*"
                  name="createAccount-rgpd"
                />

                <FieldCheckbox
                  label="J'accepte les CGU*"
                  name="createAccount-cgu"
                />
              </div>

              <button type="submit" className="createAccount__btn">JE M&#39;INSCRIS</button>
            </div>
          )}
      </form>
    </section>
  );
}

export default FormCreateAccount;
