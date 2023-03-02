import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RoleForm from '../../../components/RoleForm/RoleForm';
import Field from '../../../components/Field/Field';
import FieldCheckbox from '../../../components/FieldCheckbox/FieldCheckbox';
import { changeFieldCreateAccount } from '../../../store/reducers/createAccount';
import './FormCreateAccount.scss';
import { createAccount } from '../../../api/createAccount';

function FormCreateAccount() {
  const [continueCreating, setContinueCreating] = useState(false);
  const dispatch = useDispatch();

  const {
    first_name,
    last_name,
    email,
    password,
    confirmPassword,
    postal_code,
    city,
    availability,
    availability_details,
    role_petsitter,
    role_petowner,
  } = useSelector((state) => state.createAccount);

  function handleClickContinue() {
    setContinueCreating(true);
  }

  function handleChangeField(value, name) {
    dispatch(changeFieldCreateAccount({
      key: name,
      value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createAccount());
  }

  return (
    <section className="createAccount">
      <h3 className="createAccount__title">
        Je créer mon compte
      </h3>

      <form className="createAccount__form" onSubmit={handleSubmit}>
        <Field
          label="Adresse email*"
          type="email"
          name="email"
          placeholder="email"
          form="createAccount"
          onChange={handleChangeField}
          value={email}
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
                name="password"
                placeholder="mot de passe"
                form="createAccount"
                onChange={handleChangeField}
                value={password}
              />

              <Field
                label="Confirmation mot de passe*"
                type="password"
                name="confirmPassword"
                placeholder="mot de passe"
                form="createAccount"
                onChange={handleChangeField}
                value={confirmPassword}
              />

              <Field
                label="Prénom*"
                name="first_name"
                placeholder="prénom"
                form="createAccount"
                onChange={handleChangeField}
                value={first_name}
              />

              <Field
                label="Nom*"
                name="last_name"
                placeholder="nom"
                form="createAccount"
                onChange={handleChangeField}
                value={last_name}
              />

              <Field
                label="Code postal*"
                name="postal_code"
                placeholder="code postal"
                form="createAccount"
                value={postal_code}
                onChange={handleChangeField}
              />

              <Field
                label="Ville*"
                name="city"
                placeholder="city"
                form="createAccount"
                value={city}
                onChange={handleChangeField}
              />

              <fieldset className="createAccount__fieldset">
                <legend className="createAccount__fieldset__legend">Type(s) de profil(s)*</legend>
                <FieldCheckbox
                  label="Petowner : J'ai des animaux à faire garder"
                  name="role_petowner"
                  value={role_petowner}
                  onChange={handleChangeField}
                />

                <p className="createAccount__fieldset__separator">et / ou</p>

                <FieldCheckbox
                  label="Petsitter : je souhaite garder des animaux"
                  name="role_petsitter"
                  value={role_petsitter}
                  onChange={handleChangeField}
                />
              </fieldset>

              {role_petsitter
                && (
                <RoleForm
                  onChange={handleChangeField}
                  availability={availability}
                />
                )}

              <div className="createAccount__policy">
                <FieldCheckbox
                  label="mentions RGPD*"
                  name="rgpd"
                />

                <FieldCheckbox
                  label="J'accepte les CGU*"
                  name="cgu"
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
