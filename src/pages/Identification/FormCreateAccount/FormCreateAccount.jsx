/* eslint-disable camelcase */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RoleForm from '../../../components/RoleForm/RoleForm';
import Field from '../../../components/Field/Field';
import FieldCheckbox from '../../../components/FieldCheckbox/FieldCheckbox';
import {
  addPetType, changeFieldCreateAccount, removePetType, resetFieldsCreatAccount,
} from '../../../store/reducers/createAccount';
import { createAccount } from '../../../api/createAccount';
import './FormCreateAccount.scss';
import { schemas } from '../../../validation/user.schemas';

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
    rgpd_consent,
    cgu_consent,
  } = useSelector((state) => state.createAccount);

  const [errors, setErrors] = useState({}); // pour la gestion des erreurs

  function handleClickContinue() {
    setContinueCreating(true);
  }

  function handleChangeField(value, name) {
    dispatch(changeFieldCreateAccount({
      key: name,
      value,
    }));
  }

  function handleChangePetTypes(valueId, isChecked) {
    if (isChecked) {
      dispatch(addPetType(valueId));
    }
    if (!isChecked) {
      dispatch(removePetType(valueId));
    }
  }


  function handleSubmit(event) {
    event.preventDefault();
    // Tests de validation avec Joi
    const validationErrors = schemas.validate({
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
    }, { abortEarly: false }).error;

    // Affichage des erreurs à l'utilisateur
    if (validationErrors) {
      console.log('erreurs de validation', validationErrors);
      // Si il y a des erreurs, on les stocke dans un objet
      const newErrors = {};
      validationErrors.details.forEach((error) => {
        newErrors[error.path[0]] = error.message;
      });
      setErrors(newErrors);
    } else {
      console.log('creation du compte');

      // Si il n'y a pas d'erreurs, on envoie les données pour la création du compte
      dispatch(createAccount());
      dispatch(resetFieldsCreatAccount());
    }
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
        {errors.email && <div className="createAccount__error">{errors.email}</div>}

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
              {errors.password && <div className="createAccount__error">{errors.password}</div>}

              <Field
                label="Confirmation mot de passe*"
                type="password"
                name="confirmPassword"
                placeholder="mot de passe"
                form="createAccount"
                onChange={handleChangeField}
                value={confirmPassword}
              />
              {errors.confirmPassword && <div className="createAccount__error">{errors.confirmPassword}</div>}

              <Field
                label="Prénom*"
                name="first_name"
                placeholder="prénom"
                form="createAccount"
                onChange={handleChangeField}
                value={first_name}
              />
              {errors.first_name && <div className="createAccount__error">{errors.first_name}</div>}

              <Field
                label="Nom*"
                name="last_name"
                placeholder="nom"
                form="createAccount"
                onChange={handleChangeField}
                value={last_name}
              />
              {errors.last_name && <div className="createAccount__error">{errors.last_name}</div>}

              <Field
                label="Code postal*"
                name="postal_code"
                placeholder="code postal"
                form="createAccount"
                value={postal_code}
                onChange={handleChangeField}
              />
              {errors.postal_code && <div className="createAccount__error">{errors.postal_code}</div>}

              <Field
                label="Ville*"
                name="city"
                placeholder="city"
                form="createAccount"
                value={city}
                onChange={handleChangeField}
              />
              {errors.city && <div className="createAccount__error">{errors.city}</div>}

              <fieldset className="createAccount__fieldset">
                <legend className="createAccount__fieldset__legend">Type(s) de profil(s)*</legend>
                <FieldCheckbox
                  label="Petowner : J'ai des animaux à faire garder"
                  name="role_petowner"
                  value={role_petowner}
                  onChange={handleChangeField}
                  defaultChecked
                />
                {/* {errors.role_petowner && <div className="createAccount__error">{errors.role_petowner}</div>} */}

                <p className="createAccount__fieldset__separator">et / ou</p>

                <FieldCheckbox
                  label="Petsitter : je souhaite garder des animaux"
                  name="role_petsitter"
                  value={role_petsitter}
                  onChange={handleChangeField}
                />
                {/* {errors.role_petsitter && <div className="createAccount__error">{errors.role_petsitter}</div>} */}

              </fieldset>

              {role_petsitter
                && (
                <RoleForm
                  onChange={handleChangeField}
                  availability={availability}
                  availability_details={availability_details}
									onChangePetType={handleChangePetTypes}
                />
                )}

              <div className="createAccount__policy">
                <FieldCheckbox
                  label="Mentions RGPD*"
                  name="rgpd_consent"
                  value={rgpd_consent}
                  onChange={handleChangeField}
                />

                <FieldCheckbox
                  label="J'accepte les CGU*"
                  name="cgu_consent"
                  value={cgu_consent}
                  onChange={handleChangeField}
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
