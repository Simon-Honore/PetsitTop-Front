import { saveAccountInfos } from '../store/reducers/createAccount';
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
  } = state.createAccount;

  const { data } = await axiosInstance.post('/users', {
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
  });

  // for saved response in state
  dispatch(saveAccountInfos(data));
};
