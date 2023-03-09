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
  role_petowner: true,
  pet_type: [],
  cgu_consent: false,
  rgpd_consent: false,
};

// TODO - add CGU and RGPD

export const changeFieldCreateAccount = createAction('user/changeFieldCreateAccount');
export const saveAccountInfos = createAction('user/saveAccountInfos');
export const addPetType = createAction('user/addPetType');
export const removePetType = createAction('user/removePetType');
export const resetFieldsCreatAccount = createAction('user/resetFieldsCreatAccount');

const createAccountReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeFieldCreateAccount, (state, action) => {
      state[action.payload.key] = action.payload.value;
    })
    .addCase(saveAccountInfos, (state, action) => {
      Object.assign(state, action.payload);
    })
    .addCase(addPetType, (state, action) => {
      state.pet_type = [...state.pet_type, action.payload];
    })
    .addCase(removePetType, (state, action) => {
      state.pet_type = state.pet_type.filter((nb) => nb !== action.payload);
    })
    .addCase(resetFieldsCreatAccount, (state) => {
      state.first_name = '';
      state.last_name = '';
      state.email = '';
      state.password = '';
      state.confirmPassword = '';
      state.postal_code = '';
      state.city = '';
      state.availability = false;
      state.availability_details = '';
      state.role_petsitter = false;
      state.role_petowner = false;
      state.pet_type = [];
      state.cgu_consent = false;
      state.rgpd_consent = false;
    });
});
export default createAccountReducer;
