import { useSelect } from '@mui/base';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateConnectedUser } from '../../../api/user';
import Field from '../../../components/Field/Field';
import FieldArea from '../../../components/FieldArea/FieldArea';
import FieldCheckbox from '../../../components/FieldCheckbox/FieldCheckbox';
import Loader from '../../../components/Loader/Loader';
import RoleForm from '../../../components/RoleForm/RoleForm';
import { addPetTypeToUpdate, changeFieldUpdateAccount, removePetTypeToUpdate } from '../../../store/reducers/updateAccount';
import './UpdateMyProfile.scss';

function UpdateMyProfile() {
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

  function handleChangeField(value, name) {
    dispatch(changeFieldUpdateAccount({
      key: name,
      value,
    }));
  }

  function handleChangePetTypes(valueId, isChecked) {
    if (isChecked) {
      dispatch(addPetTypeToUpdate(valueId));
    }
    if (!isChecked) {
      dispatch(removePetTypeToUpdate(valueId));
    }
  }

  const [confirmUpdateMsg, setConfirmUpdateMsg] = useState('');

  function handleSubmitUpdateAccountForm(event) {
    event.preventDefault();
    dispatch(updateConnectedUser());
    setConfirmUpdateMsg('Les modifications ont été enregistrées');
    const timer = setTimeout(() => {
      setConfirmUpdateMsg('');
    }, 6000);
    return () => clearTimeout(timer);
  }

  return (
    <div className="profile">
      <form className="profile__settings" onSubmit={handleSubmitUpdateAccountForm}>
        <h1 className="profile__settings__title">Mon profil</h1>
        <div className="profile__settings__container">
          <div className="profile__settings__col">
            <Field
              label="Prénom*"
              name="first_name"
              placeholder="Votre prénom"
              form="updateAccount"
              onChange={handleChangeField}
              value={first_name}
            />

            <Field
              label="Nom*"
              name="last_name"
              placeholder="Votre nom"
              form="updateAccount"
              onChange={handleChangeField}
              value={last_name}
            />

            <Field
              label="Adresse email*"
              type="email"
              name="email"
              placeholder="Votre adresse email"
              form="createAccount"
              onChange={handleChangeField}
              value={email}
            />

            <Field
              label="Code postal*"
              name="postal_code"
              placeholder="Votre code postal"
              form="createAccount"
              value={postal_code}
              onChange={handleChangeField}
            />

            <Field
              label="Ville*"
              name="city"
              placeholder="Votre ville"
              form="createAccount"
              value={city}
              onChange={handleChangeField}
            />
          </div>

          <div className="profile__settings__col">
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
                label="Petowner : j'ai des animaux à faire garder"
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
          </div>
        </div>
        {role_petsitter
              && (
                <RoleForm
                  onChange={handleChangeField}
                  availability={availability}
                  availability_details={availability_details}
                  defaultChecked={availability}
                  petTypes={pet_types}
                  onChangePetType={handleChangePetTypes}
                />
              )}

        {confirmUpdateMsg.length > 0 && (
        <p className="createAccount__msg">{confirmUpdateMsg}</p>
        )}

        <button type="submit" className="createAccount__btn">ENREGISTRER LES MODIFICATIONS</button>
      </form>
      {/* )} */}
    </div>

  );
}

export default UpdateMyProfile;
