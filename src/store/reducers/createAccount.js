import { createAction, createReducer } from '@reduxjs/toolkit';

export const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirmPassword: '',
  postal_code: '',
  city: '',
  availability: false,
  availability_details: '',
  role_petsitter: false,
  role_petowner: false,
};

// TODO - add CGU and RGPD

export const changeFieldCreateAccount = createAction('user/changeFieldCreateAccount');
export const saveAccountInfos = createAction('user/saveAccountInfos');

const createAccountReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeFieldCreateAccount, (state, action) => {
      state[action.payload.key] = action.payload.value;
      console.log(action.payload.key, state[action.payload.key]);
    })
    .addCase(saveAccountInfos, (state, action) => {
      Object.assign(state, action.payload);
    });
  // .addCase(logout, (state) => {
  //   state.logged = false;
  //   state.email = '';
  //   state.password = '';
  // });
});
export default createAccountReducer;
