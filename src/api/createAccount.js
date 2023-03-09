import { loginAfterCreateAccount } from './auth';
import { axiosInstance } from './index';

export const createAccount = () => async (dispatch, getState) => {
  const state = getState();

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
    pet_type,
    cgu_consent,
    rgpd_consent,
  } = state.createAccount;

  await axiosInstance.post('/users', {
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
    pet_type,
    cgu_consent,
    rgpd_consent,
  });

  // login function to call api specially made to use email and password quickly
  dispatch(loginAfterCreateAccount(email, password));
};
