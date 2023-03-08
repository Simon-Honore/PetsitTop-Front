import { useSelect } from '@mui/base';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Field from '../../../components/Field/Field';
import FieldArea from '../../../components/FieldArea/FieldArea';
import FieldCheckbox from '../../../components/FieldCheckbox/FieldCheckbox';
import Loader from '../../../components/Loader/Loader';
import RoleForm from '../../../components/RoleForm/RoleForm';
import { changeFieldUpdateAccount } from '../../../store/reducers/updateAccount';
import './UpdateMyProfile.scss';

function UpdateMyProfile({
  firstName, lastName, postalCode, description, role,
}) {
  const dispatch = useDispatch();

  const {
    first_name,
    last_name,
    email,
    postal_code,
    city,
    presentation,
    availability,
    availability_details,
    role_petsitter,
    role_petowner,
    pet_types,
  } = useSelector((state) => state.updateAccount);

  const [isPetsitter, setIsPetsitter] = useState(false);

  const handleChange = () => {
    setIsPetsitter(!isPetsitter);
    console.log(`box is check : ${isPetsitter}`);
  };

  function handleChangeField(value, name) {
    dispatch(changeFieldUpdateAccount({
      key: name,
      value,
    }));
  }

  const test = email.length > 0;

  return (
    <div className="profile">
      {!test
        ? <Loader />
        : (
          <form className="profile__settings">
            <h1 className="profile__settings__title">Mon profil</h1>

            <Field
              label="Prénom*"
              name="first_name"
              placeholder="prénom"
              form="updateAccount"
              onChange={handleChangeField}
              value={first_name}
            />

            <Field
              label="Nom*"
              name="last_name"
              placeholder="nom"
              form="updateAccount"
              onChange={handleChangeField}
              value={last_name}
            />

            <Field
              label="Adresse email*"
              type="email"
              name="email"
              placeholder="email"
              form="createAccount"
              onChange={handleChangeField}
              value={email}
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

            <FieldArea
              label="Présentation"
              name="presentation"
              placeholder="Présentez-vous en quelques lignes"
              onChange={handleChangeField}
              form="createAccount"
              value={presentation}
              limit="200"
            />

            <fieldset className="createAccount__fieldset">
              <legend className="createAccount__fieldset__legend">Type(s) de profil(s)*</legend>
              <FieldCheckbox
                label="Petowner : J'ai des animaux à faire garder"
                name="role_petowner"
                value={role_petowner}
                onChange={handleChangeField}
                defaultChecked={role_petowner}
              />
              <p className="createAccount__fieldset__separator">et / ou</p>

              <FieldCheckbox
                label="Petsitter : je souhaite garder des animaux"
                name="role_petsitter"
                value={role_petsitter}
                onChange={handleChangeField}
                defaultChecked={role_petsitter}
              />

            </fieldset>

            {role_petsitter
                && (
                <RoleForm
                  onChange={handleChangeField}
                  availability={availability}
                  availability_details={availability_details}
                  defaultChecked={availability}
                  petTypes={pet_types}
                />
                )}

            <div className="profile__settings__input">
              <input type="submit" value="Enregistrer" />
            </div>
          </form>
        )}
    </div>

  );
}

export default UpdateMyProfile;
