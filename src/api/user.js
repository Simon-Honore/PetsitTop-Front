/* eslint-disable no-extra-boolean-cast */
import { axiosInstance } from '.';
import {
  changeFieldUpdateAccount, copyConnectedUserInfos, setPetownerRole, setPetsitterRole,
} from '../store/reducers/updateAccount';
import { getConnectedUserInfos, getPublicUserInfos } from '../store/reducers/user';

export const fetchConnectedUserInfos = () => async (dispatch) => {
  const userId = localStorage.getItem('userId');

  const { data } = await axiosInstance.get(`/users/${userId}`);

  // get connected user data and push it to the user state
  dispatch(getConnectedUserInfos(data));
  // copy connected user data to modify in updateMyProfile component
  dispatch(copyConnectedUserInfos(data));

  // transform array roles into boolean to modify
  const rolePetowner = data.roles.filter((role) => role.name === 'petowner').length > 0;
  const rolePetsitter = data.roles.filter((role) => role.name === 'petsitter').length > 0;
  dispatch(setPetsitterRole(rolePetsitter));
  dispatch(setPetownerRole(rolePetowner));

  // change null value into empty string
  if (data.presentation === null) {
    dispatch(changeFieldUpdateAccount({
      key: 'presentation',
      value: '',
    }));
  }

  // transform data.pet_type into array of number of string type
  const petTypeInGoodFormat = data.pet_types.map((petType) => petType.id.toString());
  dispatch(changeFieldUpdateAccount({
    key: 'pet_types',
    value: petTypeInGoodFormat,
  }));
};

export const fetchPublicUserInfos = (publicUserId) => async (dispatch) => {
  const { data } = await axiosInstance.get(`/users/${publicUserId}`);

  dispatch(getPublicUserInfos(data));
};

export const updateConnectedUser = () => async (dispatch, getState) => {
  const state = getState();

  const {
    first_name,
    last_name,
    email,
    presentation,
    postal_code,
    city,
    role_petowner,
    role_petsitter,
    availability,
    availability_details,
    pet_types,
  } = state.updateAccount;

  const userId = localStorage.getItem('userId');

  await axiosInstance.put(`/users/${userId}`, {
    first_name,
    last_name,
    email,
    presentation,
    postal_code,
    city,
    role_petowner,
    role_petsitter,
    availability,
    availability_details,
    pet_type: pet_types,
  });

  dispatch(fetchConnectedUserInfos());
};

export const deleteAccount = () => async (dispatch) => {
  const userId = localStorage.getItem('userId');

  await axiosInstance.delete(`/users/${userId}`);
};
